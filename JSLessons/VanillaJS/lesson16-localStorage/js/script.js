// // localStorage.setItem('name','Kamran');
// localStorage.setItem('surname','Talibli');
// document.querySelector('h1').innerHTML = localStorage.getItem('name');
// localStorage.removeItem('surname');
// // localStorage.clear();

const nav = document.querySelector("nav");
const modeBtn = document.querySelector(".mode");

const dynamicMode = () => {
  if (nav.className === "navbar navbar-expand-lg bg-light") {
    const modeOne = "navbar navbar-expand-lg navbar-dark bg-dark";
    localStorage.setItem("mode", modeOne);
    nav.className = localStorage.getItem("mode");
    modeBtn.innerHTML = "Light";
  } else {
    const modeOne = "navbar navbar-expand-lg bg-light";
    localStorage.setItem("mode", modeOne);
    nav.className = localStorage.getItem("mode");
    modeBtn.innerHTML = "Dark";
  }
};

modeBtn.onclick = dynamicMode;
nav.className = localStorage.getItem('mode');
// MultiLang

const langBtn = document.querySelector(".lang");
const langItem = document.querySelectorAll('a');

const az = ["Ana Sehife","Haqqimizda","Mehsullar","Meqale","Elaqe"];
const en = ["Home","About","Products","Blogs","Contact"];

const multiLang = ()=>{
    if (langBtn.innerHTML === "AZ") {
        for (let index = 0; index < az.length; index++) {
           langItem[index].innerHTML = az[index];
           localStorage.setItem('lang',az);
           localStorage.setItem('langBtn','EN')
           langBtn.innerHTML = "EN";
        }
    }else{
        for (let index = 0; index < en.length; index++) {
            langItem[index].innerHTML = en[index];
            localStorage.setItem('lang',en);
            localStorage.setItem('langBtn','AZ')
            langBtn.innerHTML = "AZ";
         }
    }
}
langBtn.onclick = multiLang;

for (let index = 0; index < 5; index++) {
    langItem[index].innerHTML = localStorage.getItem('lang').split(",")[index];
}
langBtn.innerHTML = localStorage.getItem('langBtn');


// Slider
document.querySelector('.slider-btn').onclick = ()=>{
    document.querySelector('.slider-img').attributes[1].value = "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
}

document.querySelector('.animate-btn').onclick = ()=>{
    document.querySelector('.slider-img').attributes[1].value = "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
    document.querySelector('.box').className = "box animate-text"
}