
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.querySelector(".box").innerHTML =
      this.responseText;
    }
    // xhttp.open("GET", "../data/carData2.json");
    xhttp.open("GET", "../data/text.txt");
    xhttp.send();
  }

  document.querySelector('button').onclick = loadDoc;