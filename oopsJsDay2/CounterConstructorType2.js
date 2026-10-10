function getCountValue()
{
    return this.count;
}
function Counter(counterValue=0)
{
    this.count=counterValue;
    this.incrementCounter=function()
    {
        this.count++;
    }
}
Counter.prototype.decrementCounter=function()
{
    this.count--;
}
Counter.prototype.getCounterValue=function()
{
    // return getCountValue.apply(this);
    // return getCountValue.call(this);
    return (getCountValue.bind(this))();
};
var counter1= new Counter();
counter1.incrementCounter();
console.log(counter1.getCounterValue())
counter1.decrementCounter();
console.log(counter1.getCounterValue());