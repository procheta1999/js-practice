function Counter()
{
    this.count=0;
}

Counter.prototype.incrementCounter=function()
{
    this.count++;
}
Counter.prototype.getCounterValue=function(){
    return this.count;
}

let counter1=new Counter();
counter1.incrementCounter();
console.log(counter1.getCounterValue());