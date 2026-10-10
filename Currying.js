function multiply(x,y)
{
    return x*y;
}

let multiplication1=multiply.bind(this,2);
console.log(multiplication1(3));

let multiplication2=multiply.bind(this,3);
console.log(multiplication2(2));

let multiplication3=multiply.bind(this);
console.log(multiplication3(2,3));