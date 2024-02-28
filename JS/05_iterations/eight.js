const myNums = [1, 2, 3];

const total = myNums.reduce( function (acc, currVal) {
    console.log(`accumulator: ${acc} and currentValue: ${currVal}`);
    return acc + currVal;
}, 0 )
console.log(total);

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0 );
console.log(myTotal);


const shoppingCart = [
    {
        item : "jsCourse",
        price : 2999
    },
    {
        item : "python",
        price : 1999
    },
    {
        item : "app dev",
        price : 6999
    },
]

const tPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(tPrice);