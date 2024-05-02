$(document).ready(function(){
    $(".card, .btn-square, .imgtentangkami").hover(function(){ // When mouse enters card
      $(this).addClass("zoomed"); // Add 'zoomed' class to the card
    }, function(){ // When mouse leaves card
      $(this).removeClass("zoomed"); // Remove 'zoomed' class from the card
    });

    // Fungsi untuk memeriksa apakah elemen berada dalam viewport saat digulir
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  // Fungsi untuk memeriksa setiap elemen <p> saat digulir
function checkFadeIn() {
    $('p, h1, h2, h3, h4, h5, form, iframe, a').each(function() {
    if (isElementInViewport(this)) {
        $(this).css('opacity', '1'); // Efek fadeIn saat elemen masuk dalam viewport
    }
    });
}

  // Panggil fungsi saat halaman dimuat dan saat digulir
    $(window).on('load scroll', checkFadeIn);

});  