function multiply(x,y)
{
    console.log(x*y);
}

const multiplication1=multiply.bind(this,2,3);
multiplication1();

const multiplication2=multiply.bind(this,2);
multiplication2(3);

const multiplication3=multiply.bind(this);
multiplication3(2,3);