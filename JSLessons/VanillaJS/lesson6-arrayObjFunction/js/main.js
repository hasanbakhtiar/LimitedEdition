// ARRAY
// her bir arrayin index deyeri var ve bu 0dan bashlayir
// const schoolProduct = ["pen", "copybook", "ruler","table"];
// for (let j = 0; j < schoolProduct.length; j++) {
//   console.log(schoolProduct[j]);
// }

// let schoolProduct=[];
// schoolProduct = ["pen", "copybook", "ruler","table"];

// let schoolProduct=[];
// schoolProduct[0] = "pen";
// schoolProduct[1] = "copybook";
// schoolProduct[2] = "ruler";

// schoolProduct[1] = "new book";
// schoolProduct[4] = "new value";
// let schoolProduct = ["pen", "copybook", "ruler","table"], a=[1,2,3,4];
// schoolProduct["myText"] = 'new value';

// console.log(schoolProduct["myText"]);
// console.log(schoolProduct);
// console.log(a);

// const sunny = "summer";
// let schoolProduct = ["pen", "copybook",[1,2,['snow',sunny],3,4,['a',['hello'],'b']], "ruler","table"];

// console.log(schoolProduct[2][2][1]);
// console.log(schoolProduct[2][5][1]);
// console.log(schoolProduct[2][3]);
// console.log(schoolProduct[2][5][1][0]);

// OBJECT

// const studentListOne = [
//     {
//       name: "Kamran",
//       surname: "Talibli",
//       age: 22,
//     },
//     {
//       name: "Ferid",
//       surname: "Alizade",
//       age: 28,
//     },
//     {
//       name: "Nicat",
//       surname: "Reshidli",
//       age: 20,
//     },
//   ];
// const studentList = {
//   data: [
//     {
//       name: "Kamran",
//       surname: "Talibli",
//       age: 22,
//     },
//     {
//       name: "Ferid",
//       surname: "Alizade",
//       age: 28,
//     },
//     {
//       name: "Nicat",
//       surname: "Reshidli",
//       age: 20,
//     },
//   ],
// };

// for (let index = 0; index < studentList.data.length; index++) {
//   console.log(studentList.data[index]);
// }

// for(let a = 0; a<schoolProduct.length; a++ ){
//     console.log(schoolProduct[a]);
// }

// for ( let key in schoolProduct ){
//     console.log(schoolProduct[key]);
// }

// for (let index = 0; index <= 10; index++) {

//     if (index == 3) {
//         // break;
//         continue;

//     }

//     console.log(index);

// }

// let schoolProduct = ["pen", "copybook", "ruler", "table"];

// FUNCTION LESSONS

// function name (params){
//     //action
// }

// function info(){
//     console.log("my function");
// }

// const info = function(){
//     console.log("my function one");
// }

// function info(){
//     return 'myfunction';
// }

// function info(a=30,b=10) {
//   return a-b;
// }

// console.log(info());

// (function info(a) {
//   console.log(a);
// })("hello");



const studentList = {
  data: [
    {
      name: "Kamran",
      surname: "Talibli",
      age: 22,
      run: function(){
          return this.name+" runing...";
      }
    },
    {
      name: "Ferid",
      surname: "Alizade",
      age: 28,
    },
    {
      name: "Nicat",
      surname: "Reshidli",
      age: 20,
    },
  ],
};

console.log(studentList.data[0].run());

function a(){
    return
}

a(name,surname,2022,2000)