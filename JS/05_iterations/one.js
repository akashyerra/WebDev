// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 15; i++) {
    const element = i;
    if(element == 10){
        // console.log("10 is the best number");
    }
    // console.log(element);
}

// console.log(element); //--> cant be accessed due to block scope


for(let i=0; i<=10; i++){
    console.log(`outer loop ${i}`);
    for(let j=0; j<=10; j++){
        // console.log(`inner loop ${j} and outer loop ${i}`);
        // console.log(i + "*" + j + " = " + i*j);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let marvel = ["ironman", "spiderman", "captain america", "hulk"];
console.log(marvel.length);
for(let i=0; i<marvel.length; i++){
    const element = marvel[i];
    console.log(element);
}

// break and continue
for (let index = 0; index <= 10; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        break;
    }
    console.log(`value ${index}`);
}
console.log();

for (let index = 0; index <= 10; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        continue;
    }
    console.log(`value ${index}`);
}

