let nameObj={
    firstName:"Pro",
    lastName:"Bhatt"
};
function printFullName(hometown, state)
{
    console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state);
}
printFullName.call(nameObj,'Kolkata','West Bengal');
printFullName.apply(nameObj,['Kolkata','West Bengal']);
var printMyName=printFullName.bind(nameObj);
printMyName('Kolkata','West Bengal');
