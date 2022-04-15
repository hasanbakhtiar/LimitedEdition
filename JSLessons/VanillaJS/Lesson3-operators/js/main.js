//ALL OPERATORS
// Assingment (daxil etme ve menimsetme operatorlari)
// =
// +=
// -=
// *=
// /=
// %=
// **=

// var a = 5;
// a **= 10;
// console.log(a);

// Aricmatic operators (Riyazi operatorlar)
// +
// -
// *
// /
// %
// ++
// --
// **
// var a = 5;
// var b = 10;
// console.log(a**b);

// Compersion operators (Muqayise operatorlari)
// ==
// ===
// >
// >=
// <
// <=
// !=
// !==
var c = "5";
var e = 5;

// if(c!==e){
//     console.log(true);
// }else{
//     console.log(false);
// }

// Logical operators (mentiqi operatorlar)
// && - AND
// || - OR
// ! - NOT

// var loginValue = "ferid@gmai.com";
// var passValue = "ferid123";

// var login = "ferid@gmai.com";
// var pass = "ferid123";
// if ((login === loginValue ) && (pass ===passValue)) {
//     console.log('login success');
// }else{
//     console.log('pass or login wrong');
// }

// if ((!true && (20>1)) && (false || false || (5<10)) )
// {
//     console.log("Bu duz ifadedir");
// }

// else
// {
//     console.log("Bu sehv ifadedir");
// }

// String operators (metn operatorlari)
// +
// +=

var a = "JavaScript";
// a+= ' Hello';
// var b = "Hello "
// console.log(b+a);

// Special operators
// ,
// var a = 5, b=10;
// console.log(a+b);

// \
var a = "Farid's Book ";
console.log(a);

// ternary operators
var loginValue = "ferid@gmai.com";
var passValue = "ferid123";

var login = "ferid@gmai.com";
var pass = "ferid123";
// ((login === loginValue) && (pass === passValue)) ? console.log('login success'): console.log(false);

// typeof
// var a = [true];
// console.log(typeof(a));
// this
// in

// instanceof

// var Car  = {
//     brand:"BMW",
//     model:"X5",
//     year:1990
// }

// if -> eger
// else -> deyilse
// else if -> deyilse eger

// var a = 5;
// if (a == 5) {
//   console.log("this is 5");
// } else if (a == 1) {
//   console.log("this is 1");
// }
//  else {
//   console.log("not found");
// }

const myTime = 7;
if (myTime >= 5 && myTime < 10) {
  console.log("Good morning");
  if (myTime == 7) console.log("have a breakfast");
  else if (myTime == 8) console.log("go to work");
} else if (myTime >= 10 && myTime < 15) {
  console.log("Good afternoon");
} else if (myTime >= 15 && myTime < 21) {
  console.log("Googd evening");
} else if (myTime >= 21 && myTime < 23) {
  console.log("Googd night");
} else {
  console.log("no time");
}
