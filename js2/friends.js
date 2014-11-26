jQuery(function ($) {
    
   /* $('#contacts').click(function (event){
        //event.stopPropagation();
        var target = event.target,
            $target = $(target);
    
        if ($target.attr('data-friend') !== undefined){
            $target.toggleClass('selected');
        }
    
        else if ($target.attr('data-delete') !== undefined){
            $target.closest('[data-friend]').remove();
        }
    });*/
    
    $('#contacts')
        .on('click', '[data-friend]', function (e) {
            $(e.target).toggleClass('selected');
        })
        .on('click', '[data-delete]', function (e) {
            $(e.target).closest('[data-friend]').remove();
        })
    ;
    
    $('#delete-all').click(function () {
        $('#contacts .selected').remove();
    });

});
