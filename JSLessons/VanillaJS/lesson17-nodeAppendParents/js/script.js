// document.querySelector('p').innerHTML = document.querySelector('h1').firstChild.nodeValue;
// document.querySelector('p').innerHTML = document.querySelector('h1').nodeName;
const text = document.querySelector("p");

//  text.innerHTML = document.querySelector('li').childNodes[0].nodeValue;
//  text.innerHTML = document.querySelector('ul').lastChild.firstChild.nodeValue;
//  text.innerHTML = document.querySelector('ul').childNodes[0].childNodes[1].firstChild.nodeValue;
//  text.innerHTML = document.querySelector('ul').nextSibling.firstChild.nodeValue;
//  text.innerHTML = document.querySelector('ul').nextSibling.firstChild.nodeType;

const inputCon = document.querySelector("input");
const itemAdd = document.querySelector(".addItem");
const btn = document.querySelector("button");

const toDoApp = () => {
  let li = document.createElement("li");
  li.innerText = inputCon.value;
  itemAdd.appendChild(li);
  inputCon.value = ""
  li.onclick = ()=>{
      li.style.textDecoration = "line-through"
  }
  li.ondblclick=()=>{
    li.remove();
    // itemAdd.removeChild(li);
  }
};

btn.onclick = toDoApp;
btn.accessKey = "w";