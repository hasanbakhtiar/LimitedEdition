const btn = document.querySelector('.modeBtn');
const nav = document.querySelector('nav');

const mode = ()=>{
    if (nav.attributes[0].value === "navbar navbar-expand-lg navbar-light bg-light") {
        nav.attributes[0].value = "navbar navbar-expand-lg navbar-dark bg-dark";
    }else{
        nav.attributes[0].value = "navbar navbar-expand-lg navbar-light bg-light";

    }
}

btn.addEventListener('click',mode);