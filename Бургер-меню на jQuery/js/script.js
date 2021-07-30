$(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active')
        $('.header__burger span').fadeToggle('linear')
        $('body').toggleClass('lock')
    })
    $('.header__icon img').click(function () {
        $(this).fadeOut(500).attr('src', '../images/icons/asset-2-4-x.png').fadeIn(500)
        //var attribute = $(this).attr('src')
        //if (attribute == $(this).attr('src', '../images/icons/asset-2-4-x.png')) {
        //    $(this).fadeOut(500).attr('src', '../images/icons/asset-3-4-x.png').fadeIn(500)
        //}
    })
})
