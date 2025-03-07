$(document).ready(function(){
    AOS.init();
    $('.preloader').delay(1500).fadeOut(1000);
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 0){
            $('header').addClass('fixed');
        }else{
            $('header').removeClass('fixed');
        }
    });
    function startCount(el){
        let max = el.dataset.goal;
        let count = setInterval(() => {
           el.textContent++;
           if(el.textContent == max){
                clearInterval(count)
           }    
        }, 5000 * stats);
    }
    
    let section = document.querySelector('section.chiffres');
    let stats = document.querySelectorAll('section.chiffres .number');
    let start = false;
    
    window.addEventListener('scroll',function(e){
        let x = window.scrollY
        let topOffset = section.offsetTop - 600
        if(x > topOffset){
            if(!start){
                stats.forEach(stat => startCount(stat));
            }
            start = true;
        }
    })
});