// ==========================================
// TASK 7.1 - VARIABLES
// ==========================================

let myName = "Kenneth";
let myAge = 20;
let isStudent = true;
let favoriteColors = ["Black", "Blue", "White"];
let todayDate = new Date();

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Student:", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", todayDate);

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);

// let vs const
let score = 100;
score = 150;

const PI = 3.14159;


// ==========================================
// TASK 7.2 - DATA TYPES & OPERATORS
// ==========================================

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

let count = 0;
count++;
count--;

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;

console.log(greeting);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);

// Challenge
let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let year100 = (new Date().getFullYear()) + (100 - myAge);

console.log("Age in days:", ageInDays);
console.log("Age in hours:", ageInHours);
console.log("Year you turn 100:", year100);


// ==========================================
// TASK 7.3 - FUNCTIONS
// ==========================================

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const add = function(x, y) {
  return x + y;
};

// Arrow function
const multiply = (x, y) => x * y;

// Arrow with body
const divide = (x, y) => {
  if (y === 0) {
    return "Cannot divide by zero";
  }
  return x / y;
};

// Exercises

function calculateArea(width, height) {
  return width * height;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function isEven(number) {
  return number % 2 === 0;
}

function getInitials(fullName) {
  return fullName
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function calculateTip(bill, tipPercent = 15) {
  return (bill * tipPercent) / 100;
}

console.log(greet("Kenneth"));
console.log(add(5, 10));
console.log(multiply(4, 5));
console.log(divide(10, 2));
console.log(calculateArea(5, 6));
console.log(celsiusToFahrenheit(30));
console.log(isEven(8));
console.log(getInitials("John Doe"));
console.log(reverseString("hello"));
console.log(calculateTip(100));


// ==========================================
// TASK 7.4 - CONTROL FLOW
// ==========================================

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(85));

function getDayName(dayNumber) {
  switch(dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid Day";
  }
}

console.log(getDayName(5));

// Numbers 1-100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Even numbers 1-50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Triangle of stars
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}


// ==========================================
// MINI PROJECT - CALCULATOR
// ==========================================

function addNums(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiplyNums(a, b) {
  return a * b;
}

function divideNums(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

function calculate(num1, operator, num2) {
  switch(operator) {
    case "+":
      return addNums(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiplyNums(num1, num2);

    case "/":
      return divideNums(num1, num2);

    case "%":
      return modulus(num1, num2);

    case "**":
      return power(num1, num2);

    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(2, "**", 3));


// ==========================================
// TASK 8.1 - ARRAYS
// ==========================================

const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
fruits.unshift("mango");
fruits.pop();
fruits.shift();

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

console.log(numbers.includes(3));

// Build Tasks
const sampleNumbers = [2, -5, 11, 8, -1];

const doubledNums = sampleNumbers.map(num => num * 2);
console.log(doubledNums);

const positiveNums = sampleNumbers.filter(num => num >= 0);
console.log(positiveNums);

const greaterThanTen = sampleNumbers.find(num => num > 10);
console.log(greaterThanTen);

const product = sampleNumbers.reduce((acc, num) => acc * num, 1);
console.log(product);


// ==========================================
// TASK 8.2 - OBJECTS
// ==========================================

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "coding"],
  address: {
    city: "New York",
    country: "USA"
  }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 31;
person.email = "john@example.com";

delete person.hobbies;

const calculatorObj = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply: (a, b) => a * b
};

console.log(calculatorObj.add(5, 3));

const scores = {
  math: 95,
  english: 88,
  science: 92
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}


// ==========================================
// TASK 8.3 - ARRAY OF OBJECTS
// ==========================================

const students = [
  { name: "Alice", age: 22, grade: 85, major: "CS" },
  { name: "Bob", age: 20, grade: 72, major: "Math" },
  { name: "Charlie", age: 23, grade: 90, major: "CS" },
  { name: "Diana", age: 21, grade: 88, major: "Physics" },
  { name: "Eve", age: 22, grade: 95, major: "CS" }
];

const names = students.map(student => student.name);
console.log(names);

const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);

const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log(avgGrade);

const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors);

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);

const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);


// ==========================================
// MINI PROJECT - GRADE TRACKER
// ==========================================

const gradeTracker = {
  students: [],

  addStudent(name, grades) {
    this.students.push({ name, grades });
  },

  getStudent(name) {
    return this.students.find(student => student.name === name) || null;
  },

  getStudentAverage(name) {
    const student = this.getStudent(name);

    if (!student) return null;

    const grades = Object.values(student.grades);

    const total = grades.reduce((sum, grade) => sum + grade, 0);

    return (total / grades.length).toFixed(2);
  },

  getSubjectAverage(subject) {
    let total = 0;
    let count = 0;

    this.students.forEach(student => {
      if (student.grades[subject] !== undefined) {
        total += student.grades[subject];
        count++;
      }
    });

    return (total / count).toFixed(2);
  },

  getTopStudent() {
    let topStudent = null;
    let highestAverage = 0;

    this.students.forEach(student => {
      const grades = Object.values(student.grades);

      const avg =
        grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

      if (avg > highestAverage) {
        highestAverage = avg;
        topStudent = student.name;
      }
    });

    return topStudent;
  },

  getStrugglingStudents() {
    return this.students.filter(student => {
      const grades = Object.values(student.grades);

      const avg =
        grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

      return avg < 70;
    });
  },

  getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";

    return "F";
  },

  generateReportCard(name) {
    const student = this.getStudent(name);

    if (!student) return "Student not found";

    let report = `Report Card for ${student.name}\n`;

    for (const [subject, grade] of Object.entries(student.grades)) {
      report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
    }

    report += `Average: ${this.getStudentAverage(name)}`;

    return report;
  }
};

// Tests

gradeTracker.addStudent("Alice", {
  math: 95,
  english: 88,
  science: 92
});

gradeTracker.addStudent("Bob", {
  math: 72,
  english: 85,
  science: 78
});

gradeTracker.addStudent("Charlie", {
  math: 60,
  english: 65,
  science: 58
});

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));


// ==========================================
// DAILY CHALLENGES
// ==========================================

// Reverse String
function reverseWord(word) {
  return word.split("").reverse().join("");
}

console.log(reverseWord("hello"));

// Largest Number
function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargest([3, 8, 2, 15, 6]));

// Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));

// Palindrome Checker
function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/\s/g, "");

  return clean === clean.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man a plan a canal Panama"));
