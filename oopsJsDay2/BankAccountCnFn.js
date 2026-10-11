const DEFAULT_BALANCE=0;
const DEFAULT_DENOMINATION='Rs';
const EMPTY='';
const OBJECT_LENGTH=2;
const errorMapping=Object.freeze({
    currencyValueError:'value cannot be less than 0',
    denominationError:'denomination does not match',
    firstNameEmptyError:'first name cannot be empty',
    lastNameEmptyError:'last name cannot be empty',
    invalidNameError:'name is not valid'
});


function denominationCheck(currencyDenomination)
{
    return this.denomination === currencyDenomination
}
function valueCheck(currencyValue)
{
    return typeof currencyValue==="number" && currencyValue >= DEFAULT_BALANCE && Number.isFinite(currencyValue)
}

function throwCurrencyValueError() {
    throw new Error(errorMapping.currencyValueError);
}
function throwCurrencyError(currency) {
    if (!(denominationCheck.call(this,currency.denomination))) {
        throw new Error(errorMapping.denominationError);
    }
    if (!valueCheck(currency.value)) {
        throwCurrencyValueError();
    }
    return;
}


const NameChecks={
    namePartCheck:function(namePart)
    {
        return namePart !== EMPTY && namePart!==undefined;
    },
    validNameCheck:function(name)
    {
        return Object.entries(name).length == OBJECT_LENGTH
    }
};
function throwNameError(name) {
    if (!(NameChecks.namePartCheck(name.firstName))) {
        throw new Error(errorMapping.firstNameEmptyError);
    }
    if (!(NameChecks.namePartCheck(name.lastName))) {
        throw new Error(errorMapping.lastNameEmptyError);
    }
    if (!(NameChecks.validNameCheck(name))) {
        throw new Error(errorMapping.invalidNameError);
    }
    return;
}




function Currency(value = DEFAULT_BALANCE, denomination = DEFAULT_DENOMINATION) {
    if (this.isValidCurrencyValue(value)) {
        this.value = value;
        this.denomination = denomination;
    }
}
Currency.prototype.isValidCurrencyValue = function (currencyValue) {
    try {
        if (valueCheck(currencyValue)) {
            return true;
        }
        else {
            throwCurrencyValueError();
        }
    }
    catch (err) {
        throw err;
    }
}
Currency.prototype.isValidCurrency = function (currency) {
    try {
        if (denominationCheck.call(this,currency.denomination) && this.isValidCurrencyValue(currency.value)) {
            return true;
        }
        else {
            throwCurrencyError.apply(this,[currency]);
        }
    }
    catch (err) {
        throw err;
    }
}
Currency.prototype.addCurrency = function (currency) {
    if (this.isValidCurrency(currency)) {
        this.value += currency.value;
    }
}
Currency.prototype.subtractCurrency = function (currency) {
    if (this.isValidCurrency(currency) && this.isValidCurrencyValue((this.value-currency.value))) {
        this.value -= currency.value;
    }
    
}
Currency.prototype.returnCurrency = function () {
    return (this.denomination + " " + this.value);
}
function Name(firstName, lastName) {
    if (this.isValidName({ firstName, lastName })) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    this.getFullName = function () {
        return (this.firstName + " " + this.lastName)
    }
}
Name.prototype.isValidName = function (newName) {
    try {
        if (NameChecks.validNameCheck(newName) && NameChecks.namePartCheck(newName.firstName) && NameChecks.namePartCheck(newName.lastName)) {
            return true;
        }
        else {
            throwNameError(newName);
        }
    }
    catch (err) {
        throw err;
    }
}
Name.prototype.setName = function (newName) {
    if (this.isValidName(newName)) {
        this.firstName = newName.firstName;
        this.lastName = newName.lastName;
    }
}
function BankAccount(nameOfAccountHolder, bankBalance = DEFAULT_BALANCE) {
    this.bankBalance = new Currency(bankBalance);
    this.nameofAccountHolder = new Name(nameOfAccountHolder.firstName, nameOfAccountHolder.lastName);
    this.deposit = function (amount) {
        this.bankBalance.addCurrency(new Currency(amount))
    }
    this.withdraw = function (amount) {
        this.bankBalance.subtractCurrency(new Currency(amount))
    }
}
BankAccount.prototype.checkBalance = function () {
    return this.bankBalance.returnCurrency();
}
BankAccount.prototype.changeAccountHolderName = function (newName) {
    this.nameofAccountHolder.setName(newName);
}
BankAccount.prototype.getAccountHolderName = function () {
    return this.nameofAccountHolder.getFullName();
}

const bankAccount = new BankAccount({ firstName: 'Procheta', lastName: 'Bhatt' });
bankAccount.deposit(5000);
console.log(bankAccount.checkBalance());
bankAccount.withdraw(200);
console.log(bankAccount.checkBalance());
bankAccount.changeAccountHolderName({ firstName: 'Rini', lastName: 'Bhatt' });
console.log(bankAccount.getAccountHolderName());

// Code smells averted:
// 1. no magic numbers
//2. no primitive obsession
//3. variable intent is clear
//4. single responsibility present
//5. guard methods present
//6. YAGNI (You aint gonna need it) followed
//7. KISS (keep it simple and silly) followed
//8. INSTEAD OF raw strings, enums are used
//9. clear exceptions/error hadling used
//10. no code duplications
//11. DRY principle(dont repeat yourself) followed
//12. Modularisation of code followed
//13. command-uery seperation present

