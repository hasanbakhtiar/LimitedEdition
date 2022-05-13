// 1000ms = 1s
// window.alert('hello');
// alert('hello');

const count = () => {
  // alert('hello');
  // document.write('hello<br>');
  // alert('a');
};

// setInterval(//method or function, time);
// setInterval(count,1000);
// clearInterval();

// setInterval(count,5000);
// setInterval(count,10);
// setTimeout(count, 10000);

// clearTimeout();

// count();

const a = () => {
  const create = document.createElement("p");
  const item = document.createTextNode("hello");
  create.appendChild(item);
  const element = document.querySelector(".box");
  element.appendChild(create);
};
const b = setInterval(a, 1000);

document.querySelector("button").onclick = () => {
  clearInterval(b);
};
