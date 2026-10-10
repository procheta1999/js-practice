function getCountValue()
{
    return this.count;
}
class Counter{
    count;
    constructor(counterValue=0)
    {
        this.count=counterValue;
    }
    incrementCounter(){
        this.count++;
    }
    resetCounter=(newCounterValue)=>{
        this.count=newCounterValue;
    }
}
Counter.prototype.decrementCounter=function()
{
    this.count--;
}
Counter.prototype.getCounterValue=function()
{
    // return getCountValue.call(this);
    // return getCountValue.apply(this);
    return (getCountValue.bind(this))();
}

let counter1=new Counter();
counter1.incrementCounter();
console.log(counter1.getCounterValue());
counter1.decrementCounter();
console.log(counter1.getCounterValue());
counter1.resetCounter(45);
counter1.incrementCounter();
console.log(counter1.getCounterValue());
counter1.decrementCounter();
console.log(counter1.getCounterValue());