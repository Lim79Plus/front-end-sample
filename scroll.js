$(function () {
    $('#exampleInputEmail1').keypress(function (event) {
        if (event.which === 13) {
            var passInpt = $('#exampleInputPassword1');
            $('html, body').animate({scrollTop:passInpt.position().top});
            // passInpt.focus();
            // var position = passInpt.position().top;
            // $('html, body').animate({scrollTop:250});
            // console.log(passInpt.position().top);
            // $(window).scrollTop(passInpt.position().top);
            // $(window).scrollTop(0, passInpt.offset().top, 3000);
            // passInpt.offset().top;
        }
    });
});
