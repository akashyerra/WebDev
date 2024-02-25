// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const trial = nums.filter( (num) => {
    return num > 5;
});
console.log(trial);

const newNums = [];
nums.forEach( (num) => {
    if(num > 4){
        newNums.push(num);
    }
} )
console.log(newNums);

