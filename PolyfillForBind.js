const nameObj2={
    firstName:"Pro",
    lastName:"Bhatt",
};
function printFullName2(hometown, state){
    console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state);
}

let printMyName2= printFullName2.bind(nameObj2);
printMyName2('Kolkata','West Bengal');

// using apply
Function.prototype.myBind=function(...args)
{
    let obj=this;
    let params=args.slice(1);
    return function()
    {
        obj.apply(args[0],params);
    }
}

let printMyName3=printFullName2.myBind(nameObj2,'Kolkata','West Bengal');
printMyName3();


