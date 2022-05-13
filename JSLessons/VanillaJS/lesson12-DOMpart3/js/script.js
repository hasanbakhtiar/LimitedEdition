// document.querySelector('button').addEventListener('click',()=>{
//         document.querySelector('p').style.color = "red";
// });

// document.querySelector('button').onclick = ()=>{
//     document.querySelector('p').style.color = "red";
// }

const btn = document.querySelector("#info-btn");
const text = document.querySelector("#info-text");

const infoFunc = () => {
  // text.style.color = "red";
  // text.style.background = "green";
  // text.attributes[0].value = 'blue';
  // text.className = "blue";
 //   text.classList.toggle('blue');

};

// btn.onmouseenter = infoFunc;
btn.onclick = infoFunc;
