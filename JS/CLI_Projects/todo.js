const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];

const addTask = () => {
    readline.question(`Enter the new Task\n`, (newTask) => {
        tasks.push(newTask);
        console.log(`\nnew task ${newTask} has been added`);
        main();
    })
}

function displayTasks (flag = true) {
    console.log();
    if(tasks.length === 0){
        console.log(`There are no todos at present`)
    }
    else{
        console.log(`============ TODOS =================`);
        tasks.forEach( (task, index) => {
            console.log(`${index + 1} : ${task}`);
        } );
        console.log(`=======================================`);
    }
    if(flag)
        main();
}

const deleteTask = () => {
    displayTasks(false);
    console.log();
    readline.question(`Enter the index of the task to be removed\n`, (idx) => {
        idx--;
        if(idx >= 0 && idx < tasks.length){
            console.log(tasks.splice(idx, 1)+" has been removed");
        }
        else{
            console.log(`you have entered wrong index`);
        }
        main();
    })
}

function main() {
    let n;
    readline.question(`Select an option to perform a task \n1. Add a new task\n2. Delete a task\n3. Display all the tasks\n4. Exit\n`, (choice) => {
        n = Number(choice);
            // console.log(n);
            switch(n) {
                case 1: addTask();
                break;
                
                case 2: deleteTask();
                break;
                
                case 3: displayTasks();
                break;
                
                case 4: readline.close();
                break;
                
                default: main();
                break;
            }
    });
}

main();