const DEFAULT_BALANCE = 0;
const DEFAULT_DENOMINATION = "Rs";
const VALUE_TYPE = 'number';
const DEFAULT_LIMIT = 0;

const errorMapping = Object.freeze({
    currencyValueLessThanZeroError: "value cannot be less than zero",
    currenyValueNotFiniteError: "value should be finite",
    currenyValueNotANumberError: "value should be a number",
    denominationMismatchError: "Denomination should match",
    limitCrossError:"Amount withdrawn cant cross limit"
});
function isValidCurrencyValue(currenyValue) {
    try {
        if (currenyValue < DEFAULT_BALANCE) {
            throw new Error(errorMapping.currencyValueLessThanZeroError);
        }
        if (!isFinite(currenyValue)) {
            throw new Error(errorMapping.currenyValueNotFiniteError);
        }
        if (typeof currenyValue !== VALUE_TYPE) {
            throw new Error(errorMapping.currenyValueNotANumberError);
        }
        return true;
    }
    catch (err) {
        throw err;
    }
}
function isValidCurrencyDenomination(currencyDenomination) {
    try {
        if (this.denomination !== currencyDenomination) {
            throw new Error(errorMapping.denominationMismatchError);
        }
        return true;
    }
    catch (err) {
        throw err;
    }
}


class Currency {
    value;
    denomination;
    constructor(value = DEFAULT_BALANCE, denomination = DEFAULT_DENOMINATION) {
        if (isValidCurrencyValue.call(this, value)) {
            this.value = value;
            this.denomination = denomination;
        }
    }
    isValidCurrency(currency) {
        return isValidCurrencyValue.call(this, currency.value) && isValidCurrencyDenomination.call(this, currency.denomination);
    }
}
Currency.prototype.add = function (amount) {
    if (this.isValidCurrency(amount)) {
        this.value += amount.value;
    }
}
Currency.prototype.subtract = function (amount) {
    if (this.isValidCurrency(amount) && isValidCurrencyValue.call(this, (this.value - amount.value))) {
        this.value -= amount.value;
    }
}
Currency.prototype.getCurrencyValue = function () {
    return (this.denomination + " " + this.value);
}
Currency.prototype.resetCurrencyValue = function () {
    this.value = DEFAULT_BALANCE;
}
Currency.prototype.setCurrencyValue = function (amount) {
    if (this.isValidCurrency(amount)) {
        this.value = amount.value;
    }
}

class BankAccount {
    accountBalance;
    accountHolderName;
    constructor(accountHolderName, accountBalance = DEFAULT_BALANCE) {
        this.accountBalance = new Currency(accountBalance);
        this.accountHolderName = accountHolderName;
    }
    deposit(amount) {
        this.accountBalance.add(new Currency(amount));
    }
    withdraw(amount) {
        this.accountBalance.subtract(new Currency(amount));
    }
    setAccountHolderName(newName) {
        this.accountHolderName = newName;
    }
}
BankAccount.prototype.getAccountHolderName = function () {
    return this.accountHolderName;
}
BankAccount.prototype.getAccountBalance = function () {
    return this.accountBalance.getCurrencyValue();
}

function Limit(limitValue = DEFAULT_LIMIT) {
    this.limitValue = new Currency(limitValue);
    this.resetLimit = function () {
        this.limitValue.resetCurrencyValue();
    }
    this.setLimit = function (newLimit) {
        this.limitValue.setCurrencyValue(new Currency(newLimit));
    }
    this.withdrawWithinLimit = function (amount,balance) {
        try {
            if (this.limitValue < amount.value) {
                throw new Error(errorMapping.limitCrossError);
            }
            balance.subtract(amount);
        }
        catch (err) {
            throw err;
        }
    }
}

const bankAccount = new BankAccount('Procheta');
bankAccount.deposit(5000);
console.log(bankAccount.getAccountBalance());
console.log(bankAccount.getAccountHolderName());

class SavingsAccount extends BankAccount {
    limit;
    constructor(accountHolderName, limit = DEFAULT_LIMIT, accountBalance = DEFAULT_BALANCE) {
        super(accountHolderName, accountBalance);
        this.limit = new Limit(limit);
    }
    setLimit(newLimit) {
        this.limit.setLimit(newLimit);
    }
    resetLimit() {
        this.limit.resetLimit();
    }
    withdraw(amount) {
        this.limit.withdrawWithinLimit(new Currency(amount),this.accountBalance);
    }
}

const zeroBalanceSavingsAccount=new SavingsAccount('Procheta');
zeroBalanceSavingsAccount.setLimit(500);
zeroBalanceSavingsAccount.deposit(5000);
zeroBalanceSavingsAccount.withdraw(200);
console.log(zeroBalanceSavingsAccount.getAccountBalance())