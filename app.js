var main = function() {
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    };
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  })
  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
    
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
    
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
    
    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    };
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
  })
}

$(document).ready(main)