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

Function.prototype.myBind=function(...args)
{
    let obj=this;
    let params=args.slice(1);
    return function(...callArgs)
    {
        obj.apply(args[0],[...params,...callArgs]);
    }
}

const printMyName1=printFullName.myBind(nameObj1);
printMyName1('Kolkata','West Bengal');
const printJunoName1=printFullName.myBind(nameObj2);
printJunoName1('Kolkata','West Bengal');