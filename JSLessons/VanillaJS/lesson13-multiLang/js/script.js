const langBtn = document.querySelector("#az");
const langItem = document.querySelectorAll("li");

const en = ["Home", "About", "Product", "Blog", "Contact"];
const az = ["Ana Sehife", "Haqqimizda", "Mehsullar", "Meqale", "Elaqe"];

const multiLang = () => {
  if (langBtn.innerHTML === "AZ") {
    for (let x = 0; x < az.length; x++) {
        langItem[x].innerHTML = az[x];
        langItem[x].style.color = '#fff';
        langItem[x].style.marginLeft = '20px';
        langBtn.innerHTML = "EN";
    }

    }else{
        for (let x = 0; x < en.length; x++) {
            langItem[x].innerHTML = en[x];
            langItem[x].style.color = '#fff';
            langItem[x].style.marginLeft = '20px';
            langBtn.innerHTML = "AZ";
        }
  }
};

langBtn.onclick = multiLang;
