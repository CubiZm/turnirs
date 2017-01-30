'use strict';

//menu

var menuBtn = document.querySelector('.main-header__menu-btn');
var filtrList = document.querySelector('.filters');

menuBtn.addEventListener('click', function(){
  filtrList.classList.toggle('active-menu');
})

// layout

$('.main')
  .each(function(){

    var $isotope = $('.content', this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function(){
      var type = $filterCheckboxes.filter(':checked').data('type') || '*';
      if(type !== '*'){
        type = '[data-type="'+ type +'"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: '.content__item',
      layoutMode: 'packery'
    });

    $(this).on('change', filter);
    filter();
  });
