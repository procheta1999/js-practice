let nameObj1 = {
    firstName: "Pro",
    lastName: "Bhatt",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

let nameObj2 = {
    firstName: "Juno",
    lastName: "Bhatt",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

function printFullName(hometown, state) {
    console.log(this.firstName + " " + this.lastName+" "+hometown+" "+state);
}
printFullName.apply(nameObj1,['Kolkata','West Bengal']);
printFullName.apply(nameObj2,['Kolkata','West Bengal']);
