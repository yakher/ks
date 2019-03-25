(function($) {
    $.fn.iklanaccordion = function(settings) {
        settings = jQuery.extend({
            active: 1,
            sUpSpeed: 40,
            sDownSpeed: 40,
            sUpEasing: null,
            sDownEasing: null
        }, settings);

        return this.each(function() {
            var $this = $(this),
                $item = $this.children('div[data-header]'),
                activePanel = settings.active - 1;

            $item.each(function() {
                $(this).hide().before('<h3 class="iklan-header">' + $(this).data('header') + '</h3>');
            });

            $this.children('div:eq(' + activePanel + ')').show().prev().addClass('active');
            $this.find('.iklan-header').on("mouseover", function() {
                $this.children('h3').removeClass('active');
                $item.slideUp(settings.sUpSpeed, settings.sUpEasing);
                $(this).addClass('active').next().slideDown(settings.sDownSpeed, settings.sDownEasing);
            });

        });
    };

})(jQuery);

$(function() {
    $('#iklan-teks').iklanaccordion();
});
$(document).ready(function() {
    $('.info-icon').hover(function() {
        $('.info-iklan').toggle();
    });
});
