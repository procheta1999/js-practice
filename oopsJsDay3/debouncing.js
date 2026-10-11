function debouncing(fn,delay)
{
    let timer;
    return function(...args)
    {
        clearTimeout(timer);
        timer=setTimeout(function()
    {
        fn.apply(this,args);
    },delay);
    }
}