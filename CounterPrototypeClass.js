class Counter{
    count;
    constructor(counterValue=0)
    {
        this.count=counterValue;
    }
}
Counter.prototype.incrementCounter=function()
{
    this.count++;
}
Counter.prototype.getCounterValue=function()
{
    return this.count;
}
let counter1=new Counter();
counter1.incrementCounter();
console.log(counter1.getCounterValue());