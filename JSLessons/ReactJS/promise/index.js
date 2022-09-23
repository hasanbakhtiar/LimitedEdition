// request -> sorgu
// responce -> cavab

// const comeData = new Promise((success,reject)=>{
//     const resData = true;
//     if (resData) {
//         success('this is success')
//     }else{
//         reject('this is reject')

//     }
// })


// comeData
// .then((res)=>console.log('Data',res))
// .catch(err=>console.log("Data",res))

const axios = require('axios');
// function comeCountry(){
//     console.log(axios.get('https://restcountries.com/v3.1/all'));
// }
// comeCountry();
// this code is for calling promise

// function comeCountry(){
//     axios
//     .get('https://restcountries.com/v3.1/all')
//     .then((res)=>console.log(res.data[0].name.common))
//     .catch('something wrong')
// }
// comeCountry();


async function comeCountry(){
   const countryList = await axios.get('https://restcountries.com/v3.1/all');
   console.log(countryList);
 
}
comeCountry();



