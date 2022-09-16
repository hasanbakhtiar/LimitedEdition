// var info:number = 5;
// console.log(info);
// if (true) {
//     let a:string = "hello";
//     console.log(a);
// }
// var infoArr:Array<number> = [1,2,3,4];
// var infoArr:number[];
// infoArr = [1,2,3,4];
// var infoArr:number[]=[1,2,3,4];
// console.log(infoArr);
// var cars = (model:string,year?:number):void=>{
//    `model:${model}`;
// }
// console.log(cars("bmw"));
// class CarsInfo{
//     protected imodel:string;
//     public iyear:number;
//     public inewcar:boolean;
//     constructor(model:string,year:number,newcar:boolean){
//         this.imodel = model;
//         this.iyear = year;
//         this.inewcar = newcar;
//     }
// }
// class infoMoto extends CarsInfo{
//     constructor(model:string,year:number,newcar:boolean){
//         super(model,year,newcar);
//     }
// }
// var myCar = new CarsInfo('BMW',2022,true)
// var myMoto = new infoMoto('Yamaha',1990,true);
// console.log(myMoto.iyear);
fetch('https://rickandmortyapi.com/api/character')
    .then(function (data) { return data.json(); })
    .then(function (comingApi) {
    var li = "";
    comingApi.results.map(function (fd, i) {
        return li += "<li id=\"list-".concat(i, "\"><img width=\"50\" src=\"").concat(fd.image, "\">").concat(fd.name, "</li>");
    });
    console.log(comingApi);
    var ol = document.querySelector('ol');
    ol.innerHTML = li;
});
