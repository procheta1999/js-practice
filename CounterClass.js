class Counter{
    count;
    constructor(counterValue=0)
    {
        this.count=counterValue;
    }
    incrementCounter()
    {
        this.count++;
    }
    decrementCounter()
    {
        this.count--;
    }
    getCounterValue()
    {
        return this.count;
    }
}
let counter1=new Counter();
counter1.incrementCounter();
console.log(counter1.getCounterValue()); 