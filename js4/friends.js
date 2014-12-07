jQuery.fn.hasAttr = function (Attr){return this.attr(Attr)!== undefined;};
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
          var $name=$('#contacts [data-newname]')[0];
            if (!!$name.value){
                var $new_Li = $('#contacts').find('.reference-html-code').eq(0).clone().removeClass('reference-html-code');
                $new_Li.find('input').attr('value',$name.value);
                $('#contacts > li:last-child').before($new_Li);
                $name.value='';
            }
        })
    ;
    
    $('#delete-all').click(function () {
        $('#contacts .selected').remove();
    });

});
