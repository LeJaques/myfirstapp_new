// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require masonry/jquery.masonry
//= require masonry/jquery.imagesloaded.min
//= require attachinary
//= require cloudinary 
//= require cloudinary/jquery.cloudinary
//= require_tree .


var boxWidth = 10 + 100;
var currentBox;
var currentRow;
var currentCol;
 
var gridWidth = $('#container').width();
var n = gridWidth / boxWidth;
var numColumn = Math.floor(n);
 
 
$('div.box:nth-child(' + numColumn + 'n)').addClass('lastBox');
$('div.box:nth-child(' + numColumn + 'n + 1)').addClass('firstBox');
 
$(window).resize(function() {
 
            $('div.box').removeClass('lastBox').removeClass('firstBox');
            var gridWidth = $('#container').width();
            var n = gridWidth / boxWidth;
            var numColumn = Math.floor(n);
 
            $('div.box:nth-child(' + numColumn + 'n)').addClass('lastBox');
            $('div.box:nth-child(' + numColumn + 'n + 1)').addClass('firstBox');
 
});

$('#container').hover(
          function () {
            $('#container .box').animate({opacity: '.25'}, {queue: false});
         }, 
          function () { 
            $('#container .box').animate({opacity: '1'}, {queue: false});
            $('#topIndicator-wrapper').animate({left: 0}, {queue: false});
            $('#leftIndicator-wrapper').animate({top: 100}, {queue: false});
            $('#leftIndicator-wrapper').css({position: 'fixed'});
         }
);      
$('.box').hover(
          function () {
            $('div.box').removeClass('lastBox').removeClass('firstBox');
            var gridWidth = $('#container').width();
            var n = gridWidth / boxWidth;
            var numColumn = Math.floor(n);
 
            $('div.box:nth-child(' + numColumn + 'n)').addClass('lastBox');
            $('div.box:nth-child(' + numColumn + 'n + 1)').addClass('firstBox');
             
            currentBox = $(this).parent().children().index(this) + 1;
            r = currentBox / numColumn;
            currentRow = Math.ceil(r);
            currentCol = currentBox - numColumn*(currentRow-1);
             
            $('#topIndicator-wrapper').animate({left: 110*(currentCol-1)}, {queue: false});
            $('#leftIndicator-wrapper').animate({top: 10+110*(currentRow-1)}, {queue: false});  
            $('#leftIndicator-wrapper').css({position: 'relative'});            
            $(this).prevUntil("div.lastBox").animate({opacity: '.5'}, {queue: false});
            $(this).nextUntil("div.firstBox").animate({opacity: '.5'}, {queue: false});
            $('div.box:nth-child(' + numColumn + 'n + ' + currentCol +')').animate({opacity: '.50'}, {queue: false});
            $(this).animate({opacity: '1'}, {queue: false});
         }, 
          function () { 
            $('.box').animate({opacity: '.25'}, {queue: false});
         }
);