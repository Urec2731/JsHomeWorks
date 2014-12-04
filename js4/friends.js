jQuery.fn.hasAttr= function (Attr){return this.attr(Attr)!== undefined;}; // Копипаст с прошлой домашки
jQuery(function ($) {
    

    
    $('#contacts')
        .on('click', '[data-friend]', function (e) {
            var $target=$(e.target); // тут оригинальный код из папки js2 собранный на уроке срабатывал на потомках лишки
            if ($target.hasAttr('data-friend')){$target.toggleClass('selected');}
        })
        .on('click', '[data-delete]', function (e) {
            $(e.target).closest('[data-friend]').remove();
        })
        .on('click', '[data-add-new-friend]', function () {
            var $name=$('#contacts [data-newname]')[0];
            if (!!$name.value){$('#contacts > li:last-child').before('<li data-friend><input type="text" class="friends-name" value="'+ $name.value +'" /><button data-delete>Delete</button></li>');
                $name.value='';
            }
        })
    ;
    
    $('#delete-all').click(function () {
        $('#contacts .selected').remove();
    });

});
