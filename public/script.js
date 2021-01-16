$(document).ready(() => {
    let d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dateOutput = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    document.getElementById('todayDate').innerHTML = dateOutput;
});
$(document).ready(() => {
    $(document).scroll(() => {
        if(window.pageYOffset > 0) {
            $('header').css('box-shadow', '0 2px 2px 2px #ddd');
            $('.header-logo').css('padding', '0');
            $('.header-logo h1').css('font-size', '40px');
            $('#todayDate').css('font-size', '15px');
        } else {
            $('header').css('box-shadow', 'none');
            $('.header-logo').css('padding', '30px');
            $('.header-logo h1').css('font-size', '50px');
            $('#todayDate').css('font-size', '18px');
        }
    });
});
$(document).ready(() => {
    $('.hidden-menu').css('display', 'flex');
    $('.hidden-menu').hide();
    $('.show-menu-icon').click(() => {
        $('.hidden-menu').animate({
            width: 'toggle'
        });
        $('.show-menu-icon').hide(500);
        $('.hide-menu-icon').show(500);
    });
    $('.hide-menu-icon').click(() => {
        $('.hidden-menu').animate({
            width: 'toggle'
        });
        $('.hide-menu-icon').hide(500);
        $('.show-menu-icon').show(500);
    });
});