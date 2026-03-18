//advanced js concepts
//array
//array index starts at 0
const students = ["Jane", "Jenny", "Kate", "Amy"];
console.log(students[0]); //Jane
console.log(students[1]); //Jenny
console.log(students[2]); //Kate
console.log(students[3]); //Amy
console.log("Number of students: " + students.length); //4

//array of objects -- object --property and methods
//student name, student id, student marks --for 4 students
//each students info stored in an object
//all objects grouped in an array

const studentAOB = [
  { sid: 101, sname: "Jane", smarks: 78 },
  { sid: 102, sname: "Jenny", smarks: 85 },
  { sid: 103, sname: "Kate", smarks: 35 },
];
//studentAOB -- array
//each item inside {} -- object

console.log(studentAOB[0].sname); //Jane
console.log(studentAOB[1].smarks); //85

//loop to display all values
for (let i = 0; i < studentAOB.length; i++) {
  console.log(studentAOB[i].sid);
  console.log(studentAOB[i].sname);
  console.log(studentAOB[i].smarks);
}

//map function -- to loop through arrays/objects
studentAOB.map(function (student) {
  console.log(student.sid);
  console.log(student.sname);
  console.log(student.smarks);
});

//map used in react as below
//uses arrow function
studentAOB.map((student) => {
  console.log(student.sid);
  console.log(student.sname);
  console.log(student.smarks);
});

//JSON files --data retrieval --display in JS
//JSON -- text content -- java script object notation
//JSON files --user defined, fakeJSON --fakeAPI

//retrieve data from a fake API --use fetch() function
fetch("https://fakestoreapi.com/products/3")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.id); //3
    console.log(data.title); //Mens Cotton Jacket
    console.log(data.price); //55.99
  });

//fetch data and display data using map function
fetch("https://fakestoreapi.com/products/3")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.map(function (product) {
        console.log(product.id);
        console.log(product.title);
    });
  });

  //arrays, array of objects, map function, fetch function 
