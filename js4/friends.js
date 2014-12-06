jQuery.fn.hasAttr = function (Attr){return this.attr(Attr)!== undefined;};
jQuery.fn.referenceHtml = function () {return this.contents().filter(function (){return this.nodeType === 8 })[0].data}; // new
jQuery(function ($) {
    

    
    $('#contacts')
        .on('click', '[data-friend]', function (e) {
            var $target=$(e.target);
            if ($target.hasAttr('data-friend')){$target.toggleClass('selected');}
        })
        .on('click', '[data-delete]', function (e) {
            $(e.target).closest('[data-friend]').remove();
        })
        .on('click', '[data-add-new-friend]', function () {
            var splitedtext = $('#contacts').referenceHtml().split('$$$$$');       // получение референсной лишки
            /////////////////////////////////////////////////////
            var $name=$('#contacts [data-newname]')[0];
            if (!!$name.value){$('#contacts > li:last-child').before(splitedtext[0] + $name.value + splitedtext[1]);
                $name.value='';
            }
        })
    ;
    
    $('#delete-all').click(function () {
        $('#contacts .selected').remove();
    });

});
