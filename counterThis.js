function CounterThis(count=0)
{
    this.count=count;
    this.getCounterValue=function()
    {
        return this.count;
    }
    this.incrementCounter=function()
    {
        this.count++;
    }
}
let counter1=new CounterThis();
counter1.incrementCounter();
console.log(counter1.getCounterValue());