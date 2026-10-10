function debounce(fn,delay)
{
    let timer;
    return function(...args)
    {
        clearTimeout(timer);
        timer=setTimeout(()=>
    {
        fn.apply(this,args); // this should be wrapper's this instead of settIMEOUT'S THIS
    },delay);
    }
}
var p=debounce(function(){ console.log("DEbounce")},1000);
p();