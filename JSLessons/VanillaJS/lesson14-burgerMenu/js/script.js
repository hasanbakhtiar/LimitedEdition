const btn = document.querySelector('button');
const burger = document.querySelector('#burger');


const burgerFunc = ()=>{
    if (burger.className === 'show') {
        burger.className = 'hide';
        btn.innerHTML = " →";
    }else{
        burger.className = 'show'
        btn.innerHTML = "X"

    }
}

btn.onclick = burgerFunc;