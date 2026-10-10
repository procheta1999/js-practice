function b(x)
{
    return function(y)
    {
        return x*y;
    }
}
console.log(b(2)(3));

var p=b(2);
console.log(p(3));