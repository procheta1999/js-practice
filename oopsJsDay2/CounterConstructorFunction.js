function Counter()
{
    let count=0;
    this.incrementCounter=function()
    {
        count++;
    }
    this.decrementCounter=function()
    {
        count--;
    }
    this.getCounterValue=function()
    {
        return count;
    }
}
var counter1=new Counter();
counter1.incrementCounter();
console.log(counter1.getCounterValue());