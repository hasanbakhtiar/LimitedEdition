// $(function(){
//     $('button').click(function(){
//         $('p').load('../data/text.txt');
//     })
// })



$(function(){
    $('button').click(function(){
        $('p').load('../data/text.txt p' ,function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              alert("Melumat ugurla geriye dondu");
            if(statusTxt == "error")
              alert("Xeta: " + xhr.status + ": " + xhr.statusText);
          });
    })
})
