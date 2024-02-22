let index = 0;
while(index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index+3;
}
console.log();

let marvel = ["ironman", "black panther", "captain america"];

let idx = 0;
while(idx < marvel.length){
    console.log(`Hero is ${marvel[idx]}`);
    idx++;
}
console.log();

let points = 11;
do {
    console.log(`Points are ${points}`);
    points++;
} while (points <= 10);