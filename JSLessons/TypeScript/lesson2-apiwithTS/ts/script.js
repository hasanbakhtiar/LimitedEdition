var ol = document.createElement("ol");
var body = document.body;
body.appendChild(ol);
var btn1 = document.createElement("button");
var btn1Content = document.createTextNode("1");
btn1.appendChild(btn1Content);
body.appendChild(btn1);
var btn2 = document.createElement("button");
var btn2Content = document.createTextNode("2");
btn2.appendChild(btn2Content);
body.appendChild(btn2);
var btn3 = document.createElement("button");
var btn3Content = document.createTextNode("3");
btn3.appendChild(btn3Content);
body.appendChild(btn3);
var btn4 = document.createElement("button");
var btn4Content = document.createTextNode("4");
btn4.appendChild(btn4Content);
body.appendChild(btn4);
var btn5 = document.createElement("button");
var btn5Content = document.createTextNode("5");
btn5.appendChild(btn5Content);
body.appendChild(btn5);
var countStart = 0;
var countEnd = 50;
var countryList = function () {
    var li = "";
    fetch("https://restcountries.com/v3.1/all")
        .then(function (data) { return data.json(); })
        .then(function (comingApi) {
        // comingApi.map((fd:any)=>{
        //     // console.log(fd.name.common);
        //     return li+=`<li>${fd.name.common}</li>`
        // })
        for (var x = countStart; x < countEnd; x++) {
            li += "<p><span>".concat(x + 1, "-</span>").concat(comingApi[x].name.common, "</p>");
        }
        ol.innerHTML = li;
    });
};
btn1.onclick = function () {
    countStart = 0;
    countEnd = 50;
    countryList();
};
btn2.onclick = function () {
    countStart = 50;
    countEnd = 100;
    countryList();
};
btn3.onclick = function () {
    countStart = 100;
    countEnd = 150;
    countryList();
};
btn4.onclick = function () {
    countStart = 150;
    countEnd = 200;
    countryList();
};
btn5.onclick = function () {
    countStart = 200;
    countEnd = 250;
    countryList();
};
countryList();
