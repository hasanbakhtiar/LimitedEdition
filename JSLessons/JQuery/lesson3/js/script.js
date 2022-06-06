// // $(function(){
// //     $('.btn').click(function() {
// //     //   $('.box').animate({
// //     //     left: '250px',
// //     //     opacity: '1',
// //     //     height: 'toggle',
// //     //     width: '+=100px',
// //     //     backgroundColor:'red'
// //     //   },2000);  
// //     // $('.box').animate({
// //     //     left: '250px',
// //     //     opacity: '1',
// //     //     height: '100px',
// //     //     width: '100px',
// //     //     backgroundColor: "#aa0000",
// //     //   },2000,()=>{document.write('Hello there')}); 
// //     //   $('.box').css("color", "red").slideUp(2000).slideDown(2000);
// //     });
// // })

// $(function(){
//     $('.btn').click(function() {
//     //   alert($('.text').text());
//     //   alert($('.text').html());
//     // document.querySelector('.box').innerHTML = $('.text').html();
//     // document.querySelector('.box').innerHTML = $('input').val();
//     // document.querySelector('input').value = $('a').attr('href');
//     // $('a').text('Hello');
//     // $('a').html('<b>Hello</b>');
//     // $("input").val("Dolly Duck");
//     // $(".text").text((say,metn)=>{
//     //     return " say: "+say+" metn: "+metn+" bu da yeni metn"
//     // });
//     $('a').attr('href',"https://google.com")

//     });
// })

// // https://www.w3schools.com/jquery/jquery_dimensions.asp


const kamran = $.noConflict();

kamran(function(){
    kamran('.btn').click(function() {
        kamran('.text').text('Mello');
    });
})

