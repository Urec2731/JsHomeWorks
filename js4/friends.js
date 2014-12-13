jQuery(function ($) {
    var $contacts = $('#contacts');
    var $Li_template = $contacts.find(':first-child').eq(0).remove();
    var Names  = ['Саня','Толик','Вован','Влад','Кирюша','Шурик','Миха','Тоха','Андрей','Дима'];

    $contacts.addNewFriend   = function (someName) {
        var $clone = $Li_template.clone();
        $clone.find('input').attr('value',someName);
        $clone.appendTo(this);
    };

    Names.forEach(function (nameValue){$contacts.addNewFriend(nameValue)});

    $('#contacts')
        .on('click', '[data-friend]', function (e) {
            var $target=$(e.target);
            if ($target.is('[data-friend]')){$target.toggleClass('selected');}
        })
        .on('click', '[data-delete]', function (e) {
            $(e.target).closest('[data-friend]').remove();
        })

    ;

    $('#add-new-friend').click(function () {
        var $name=$('#friends-new-name')[0];
        if (!!$name.value){
            $contacts.addNewFriend($name.value);
            $name.value='';
        }
    });
    $('#delete-all').click(function () {
        $('#contacts .selected').remove();
    });

});
