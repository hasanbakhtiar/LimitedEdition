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
.then((data:any)=>data.json())
.then((comingApi:any)=>{
    let li:string = "";
    comingApi.results.map((fd:any,i:number)=>{
       return li+=`<li id="list-${i}"><img width="50" src="${fd.image}">${fd.name}</li>`
    })
    console.log(comingApi);
    const ol:any = document.querySelector('ol');
    ol.innerHTML = li;
});
