$(document).ready(() => {
    $('main').load('/Templates/Home.html');

    // $('#listOfHeader li').on("click", () => {
    //     alert($(this).text());
    // })
    document.getElementById('listOfHeader').addEventListener('click', (ev) => {
        $('main').load(`/Templates/${ev.target.innerText}.html`);
    });


    $(window).load(() => {
        $('#Menu').hide();
        $('.continersHelper > nav').append("<input class='searchInput' style = 'display: none' placeholder='searching..' type='text'>")
    })

    $(window).scroll(() => {
        if($(window).scrollTop() >= 800){
            $('#MainbackUP').show();
            $(header).addClass('HeaderAnimetion');
        }else{
            $('#MainbackUP').hide();
            $(header).removeClass('HeaderAnimetion');
        }
    })
    /*$('#MainbackUP').click(() => {
        $(location).prop('herf', '#Home')
    })*/

    
    $('#Searching').click(() => {
        
        $('.searchInput').toggle(250);
        // if($('.searchInput').is(':hidden')){
        //     $('.searchInput').show('slow');
        //     status = true;
        // }
        // $(window).click(() => {
        //     if(!$('.searchInput').is(':hidden') && status == false)
        //         $('.searchInput').hide('slow');
        // })
    })

    $('#profileDoor').click(() => {
        $('.backBlur').show(500);
        $('body').css ({
            'overflow': 'hidden'
        })
    })

    $('.closeModle').click (() => {
        $('.backBlur').hide('0.02s');
        $('body').css ({
            'overflow': 'visible'
        })
    })


    $('.register').css({
        'transform': 'rotateY(-180deg)'
    })
    $('#submit1').click(() => {
        $('section').css({
            'animation' : 'ModleSignUp 3s ease',
            'transform' : 'rotateY(180deg)'
        })

        $('.login').show();
        $('.register').hide();

        setTimeout(() => {
            $('.login').hide();
            $('.register').show();
        }, 850);
    })

    $('#submit2').click(() => {
        $('section').css({
            'animation' : 'ModleLogin 3s ease',
            'transform' : 'rotateY(0deg)'
        })

        $('.login').hide();
        $('.register').show();

        setTimeout(() => {
            $('.login').show();
            $('.register').hide();
        }, 850);
    })

})