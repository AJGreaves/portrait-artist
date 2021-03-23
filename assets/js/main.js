window.onscroll = function () {
    scrollFunction();
};

/**
 * Hides navbar when user scrolls down.
 */
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".navbar").addClass('invisible');
    } else {
        $(".navbar").removeClass('invisible');
    }
}

$('.navbar-toggler-icon').click(function() {
    $('.navbar').toggleClass('bg-white');
})

// Sets current year for copyright info in footer
document.getElementById("year").innerHTML = new Date().getFullYear();