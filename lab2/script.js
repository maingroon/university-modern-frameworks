function processTask1(students) {
    const improvedStudents = students.map(student => {
        return {
            name: student.name,
            grade: student.grade * 1.05,
        }
    })

    console.log("Task 1", improvedStudents);
}

function processTask2(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    console.log("Task 2", evenNumbers);
}

function processTask3(students) {
    const totalGrade = students.reduce((accumulator, student) => accumulator + student.grade, 0);

    console.log("Task 3", totalGrade);
}

function processTask4(number) {
    const double = (x) => x * 2;
    const addThree = (x) => x + 3;
    const composedFunction = (x) => addThree(double(x));

    console.log("Task 4", composedFunction(number));
}

const fibonacciCache = {};
function processTask5(number) {
    const fibonacci = (n) => {
        if (n in fibonacciCache) {
            return fibonacciCache[n];
        }
        if (n <= 1) {
            return n;
        }
        fibonacciCache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return fibonacciCache[n];
    }

    console.log("Task 5", fibonacci(number));
}