console.log('It works')

$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('Clicked Button')
        var email = $('.email').val()
        var subject = $('.subject').val()
        var name = $('.name')
        statusElm.empty()
    })
})