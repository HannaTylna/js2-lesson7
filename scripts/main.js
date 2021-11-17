function hideP(){
    $('p').hide('slow')
}
function showP(){
    $('p').show('fast')
}
function hideP1(){
    $('#p-1').hide('slow')
}
function showP1(){
    $('#p-1').show('slow')
}
$(function() {
    /* $('button.show-p-1').click(function(){
        showP1()
    }) */
    /* $('button.show-p-1').on('click', function(){
        showP1()
    }) */
   /*  $('button').on('click', function(){
        console.log(this)
    }) */
    $('button').on('click', function(){
        $(this).hide()
    });
    /* $('div').fadeOut('slow'); */
    /* $('div').fadeTo('slow', 0.2);  */// Fade:a sakta till 0.2 i opacity (0=helt genomskinligt, 1=helt synlig)
    /* $('button').click(function(){
        $('div').fadeToggle(1000);
    }); */
    /* $('button.slideUp').on('click', function(){
        $('div').slideUp('slow');
    });
    $('button.slideDown').on('click', function(){
        $('div').slideDown('slow');
    })
    $('button.slideToggle').click(function(){
        $('div').slideToggle('slow');
    })
    $("div").animate({left: '250px'});
    $("div").animate({height: '500px'});
    $("div").animate({
        opacity: '0.2',
        height: '400px',
        width: '300px'
    });
    $("div").animate({fontSize: '80px'}, "slow") // Notera att font-size skrivs med camelCase (fontSize)
     */
    /* $('button.stopAnimate').on('click', function(){
        $("div").stop(); // stoppa animering
    }); */
    /* $("div").text(`Hello World!`); */
    $("div").html(); // istället för element.innerHTML
    $('.test p').addClass('test__paragragh');
    $('button.num').click(function(){
        $("input.number").val(); // istället för element.value
        $('test__paragragh').text(`Du valde `)
    })
    
})
$(function(){
    $('button.slideUp').on('click', function(){
        $('div').slideUp('slow');
    });
    
    $('button.slideToggle').click(function(){
        $('div').slideToggle('slow');
    });
    $('button.stopAnimate').on('click', function(){
        $("div").stop(); // stoppa animering
    });
    $('button.slideDown').on('click', function(){
        $('div').slideDown('slow');
    });
});
