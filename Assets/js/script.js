AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate',
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99,
    offset: 120, 
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
  $('#up-arrow').click(function() {
    $('html,body').animate({
        scrollTop : 0 },
        'cubic-bezier(0.1, 0.7, 1.0, 0.1)');
    });
    $(".nav-item a").click(function() {
        $('html,body').animate({
            scrollTop : $($(this).attr('href')).offset().top },500,'linear');
        });
        $(window).on("load",function() {
            $('.loader .inner').fadeOut(3000,function() {
                $('.loader').fadeOut(750);
            });
        });