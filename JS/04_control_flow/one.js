// if
const isUserLoggedIn = true;
if(isUserLoggedIn) {

}

if(2 === "2"){
    console.log("Executed");
}

// conditional operators -> <, >, <=, >=, ==(checks the value), !=, ===(checks the value as well as the type of the variables/data)

const temperature = 35
if(temperature === 50){
    console.log("Normal or cold");
} else{
    console.log("temperature greater than 50");
}
const score = 20000;
if (score > 100){
    const power = "laser beams";
    console.log(`Special ability of the user : ${power}`);
}
// console.log(`Special ability of the user : ${power}`);

const balance = 1500;
//  if(balance > 5) console.log("rich"), console.log("invest");

if(balance < 750){
    console.log("less than 750");
} else if (balance < 1000){
    console.log("balance less than 1000");
} else if (balance < 1500){
    console.log("balance less than 1500");
}
else if(balance < 2000){
    console.log("balance less than 2000");
}
else{
    console.log("greater than 2000");
}

// logical operators --> &&(logical and), ||(logical or), !(logical not) --> used to combine the conditional statements together