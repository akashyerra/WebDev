const coding = ["js", "ruby", "cpp", "java", "flutter", "kotlin"]

coding.forEach( function (item) {
    console.log(item);
} )
console.log();

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
console.log();

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe);

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    }
];

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})
console.log();

// refer mdn docs for more info about the high order loops for arrays and objects