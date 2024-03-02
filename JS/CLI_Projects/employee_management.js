const readline = require("readline-sync");
const fs = require("fs");

const empFile = "employees.json";

let employees = loadEmployees();

function loadEmployees() {
  try {
    const data = fs.readFileSync(empFile, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveEmployees() {
  const data = JSON.stringify(employees, null, 4);
  fs.writeFileSync(empFile, data);
}

function addEmployees() {
  const name = readline.question("Enter the name of the employee: ");
  const position = readline.question("Enter the position: ");
  const salary = readline.questionInt("Enter the salary: ");
  employees.push({ name, position, salary });
  saveEmployees();
  console.log(`Employee added successfully`);
}

function displayDetails() {
  if (employees.length === 0) {
    console.log("There is no employee data");
  } else {
    employees.forEach((employee, index) => {
      console.log(
        `${index + 1}. Name: ${employee.name} - Position: ${
          employee.position
        } - Salary: $${employee.salary}`
      );
    });
  }
}

function updateDetails() {
  displayDetails();
  const indexToBeUpdated = readline.question("Enter the index of the employee to be updated: ") - 1;
  if (indexToBeUpdated >= 0 && indexToBeUpdated < employees.length) {
    const updatedName = readline.question(`Enter the new name for ${employees[indexToBeUpdated].name}: `);
    const updatedPosition = readline.question(`Enter the new Position for ${employees[indexToBeUpdated].position}: `);
    const updatedSalary = readline.question(`Enter the salary for ${updatedName}: `);

    employees[indexToBeUpdated] = {
      name: updatedName,
      position: updatedPosition,
      salary: updatedSalary,
    };

    saveEmployees();
    console.log(`Employee details have been updated!`);
  } else {
    console.log("Enter the correct index of the employee. Please try again");
    updateDetails();
  }
}

function deleteEmployee() {
  displayDetails();
  const indexToBeDeleted = readline.question(`Enter the employee index that has to be deleted`) - 1;
  if (indexToBeDeleted >= 0 && indexToBeDeleted < employees.length) {
    const YorN = String(readline.question(`Are you sure to exit? Enter Y for yes and N for no: `));
    if(YorN === "Y"){
        employees.splice(indexToBeDeleted, 1);
        console.log("Employee details successfully deleted!");
        saveEmployees();
    } else{
        console.log("The operation has been cancelled");
    }
  } else {
    console.log("Invalid input given. Try again");
    deleteEmployee();
  }
}

function main() {
    while(true){
        console.log("Options: \n1. Add an employee\n2. Update Employee\n3. Delete Employee\n4. Display employees\n5. Exit");
        const choice = Number(readline.question(`Enter your choice: `));

        switch(choice) {
            case 1: addEmployees();
                    break;
            
            case 2: updateDetails();
                    break;
            
            case 3: deleteEmployee();
                    break;
            
            case 4: displayDetails();
                    break;
            
            case 5: const YorN = readline.question(`Are you sure to exit? Enter Y for yes and N for no: `);
                    if(YorN === "Y"){
                        console.log(`Exiting the Employee Management System. GoodBye!`);
                        process.exit();
                    }
                    else{
                        break;
                    }
                    break;
            
            default: console.log("You have entered a wrong choice. Try again.");
                    break;
        }
    }
}

main();
