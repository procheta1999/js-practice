function throttle(fn,limit)
{
    let lastTime=0;
    return function(...args)
    {
        const now=Date.now();
        if(now-lastTime>=limit)
        {
            lastTime=now;
            fn.apply(this,args);
        }
    }

}