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
// const printMyName=printFullName.bind(nameObj1,'Kolkata','West Bengal');
// printMyName();
// const printJunoName=printFullName.bind(nameObj2,'Kolkata','West Bengal');
// printJunoName();

const printMyName=printFullName.bind(nameObj1);
printMyName('Kolkata','West Bengal');
const printJunoName=printFullName.bind(nameObj2);
printJunoName('Kolkata','West Bengal');
