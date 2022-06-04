// before jquery 3.0 version

// $( document ).ready(function(){
// })


// after jquery 3.0 version
// $(function(){
//     $('ne ile').nece(function(){
//         $('neyi').etsin;
//     })
// });


// $(function(){
//     $('button').click(function(){
//         $('p').hide()
//     })
// })



// $(function(){
//     $('button').click(function(){
//         // $('p.kamran').hide(1000)
//         // $('#a').hide(1000)
//         // $(this).hide(1000)
//         // $('p').hide(1000)
//         $("a[target='_blank']")	.hide(1000)
//     })
// })

// All events
// https://www.w3schools.com/jquery/jquery_events.asp



$(function(){
    $('button').click(function(){
        // $('p').css('color','red');
        // $('p').css({'color':'red',"background-color":'green'});
        // $('p').addClass('dark');
        // $('p').toggleClass('dark');
        // $(this).removeClass('dark');
        // $('.dark').hide(1000);
        // $('.dark').show(1000);
        // $('.dark').show(1000);
        // $('.dark').toggle(1000);
        // $('.dark').toggle(1000);
        // $('.dark').fadeIn('slow');
        // $('.dark').fadeOut('slow');
        // $('.dark').fadeToggle('slow');
        // $('.dark').fadeToggle('slow',()=>{
        //     alert("hello")
        // });

        // $('.dark').fadeTo('slow',0);
        // $('.dark').slideDown()
        // $('.dark').slideDown(2000)
        // $('.dark').slideUp(2000)
        // $('.dark').slideToggle(2000);
        $('.dark').slideToggle(2000,()=>{
            $('button').css({'color':'red'})
        });
        // stop jq metjod
        // https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_stop_slide


    })
})
