const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function PrintDeveloper() {
    const developers = data.filter(person => person.profession.toLowerCase() === "developer");
  if (developers.length > 0) {
    console.log("Developers:", developers);
  } else {
    console.log("No developers found.");
  }
}

// 2. Add Data
function addData() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");

    const newData = {
        name: name,
        age: age,
        profession: profession
    };

    data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
    const filteredData = data.filter(person => person.profession !== "admin");
    console.log("Admins removed:", filteredData);
  }

// 4. Concatenate Array
function concatenateArray() {
    const dummyArray = [
        { name: "alice", age: 30, profession: "developer" },
        { name: "bob", age: 32, profession: "admin" }
    ];

    const concatenatedArray = [...data, ...dummyArray];
    console.log("Concatenated Array:", concatenatedArray);
}

// 5. Average Age
function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const avgAge = totalAge / data.length;
    console.log("Average Age:", avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);
    if (isAbove25) {
        console.log("There is at least one person older than 25.");
    } else {
        console.log("There is no one older than 25.");
    }
}

// 7. Unique Professions
function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log("Unique Professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
    const john = data.find(person => person.name.toLowerCase() === "john");
    if (john) {
        john.profession = "manager";
        console.log("John's profession updated to 'manager'");
    } else {
        console.log("John not found in the data.");
    }
}

// 10. Profession Count
function getTotalProfessions() {
    const developerCount = data.filter(person => person.profession === "developer").length;
    const adminCount = data.filter(person => person.profession === "admin").length;
    console.log("Total Developers:", developerCount);
    console.log("Total Admins:", adminCount);
}
