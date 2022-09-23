// // add, get, update, delete
// interface IDatabase{
//     add();
//     get();
//     update();
//     delete();
// }
// class MySql implements IDatabase{
//     add(){
//         console.log('MySql Add');
//     }
//     get(){
//         console.log('MySql get');
//     };
//     update(){
//         console.log('MySql udate');
//     };
//     delete(){
//         console.log('MySql delete');
//     };
// }
// class MongoDB implements IDatabase{
//     add(){
//         console.log('MongoDB Add');
//     }
//     get(){
//         console.log('MongoDB get');
//     };
//     update(){
//         console.log('MongoDB udate');
//     };
//     delete(){
//         console.log('MongoDB delete');
//     };
// }
// function AddDatabase(database:IDatabase){
//         database.add();
// }
// AddDatabase(new MySql())
// AddDatabase(new MongoDB())
var car = 'red';
var colorCar = function (color) {
    car = color;
};
colorCar('grey');
console.log("car is: ".concat(car));
