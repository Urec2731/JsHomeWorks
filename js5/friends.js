jQuery(function ($) {
    var $contacts = $('#contacts');
    var $Li_template = $contacts.find(':first-child').eq(0).remove(); $contacts.empty();
    var Names  = ['Саня','Толик','Вован','Влад','Кирюша','Шурик','Миха','Тоха','Андрей','Дима'];
    var NamesM =[];
    var object ={
        myChangesControllerAdd: function(AddedModel){
            console.log('Changes Come In');
            $contacts.addNewFriend(AddedModel.get('friendName'),AddedModel.cid);

        },
        myChangesControllerRemove: function (RemovedModel){
            $contacts.find( '[data-friend='+RemovedModel.cid+']').remove();console.log('Real remove');
        }
    };

    $contacts.addNewFriend   = function (someName,cid) {
        var $clone = $Li_template.clone();
        $clone.find('input').attr('value',someName);
        $clone.attr('data-friend',cid);
        $clone.appendTo(this);
    };


    Names.forEach(function (friendName){
        NamesM.push(new Backbone.Model({friendName:friendName}));
    });

    var collection = new Backbone.Collection();
    _.extend(object, Backbone.Events);
    object.listenTo(collection,'add',object.myChangesControllerAdd);
    object.listenTo(collection,'remove',object.myChangesControllerRemove);

    collection.set(NamesM);

    $('#contacts')
        .on('click', '[data-friend]', function (e) {
            var $target=$(e.target);
            if ($target.is('[data-friend]')){$target.toggleClass('selected');}
        })
        .on('click', '[data-delete]', function (e) {
            var tmpModel = collection.get(
            $(e.target).closest('[data-friend]').attr('data-friend'));
            collection.remove(tmpModel);console.log('Remove click');
        })

    ;

    $('#add-new-friend').click(function () {
        var $name=$('#friends-new-name')[0];
        if (!!$name.value){
            collection.add(new Backbone.Model({friendName:$name.value}))
            $name.value='';
        }
    });
    $('#delete-all').click(function () {
        var $fetch=$contacts.find('.selected');
        var i = 0, tmpArray = [];
        for (i = 0; i < $fetch.length; i++){tmpArray.push($fetch.eq(i).attr('data-friend'))};
        collection.remove(tmpArray.map(function (mycid){return collection.get(mycid)}));
    });

});
