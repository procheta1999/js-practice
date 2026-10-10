function debouncing(fn,delay)
{
    let timer;
    return function(...args)
    {
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(this,args);
        },delay);
    }
}
let d1=debouncing(function(){console.log("debouncing")},2000);
d1();