$('#contacts').click(function (event){
    event.stopPropagation();
    var target = event.target,
        $target = $(target);

    if (target.nodeName === 'LI'){
        $target.toggleClass('prepared-to-delete');
    }

    else if ($target.hasClass('DelButton')){
        $target.parent().remove();
        
    }

    else if ($target.hasClass('DelAll')){
        $('#contacts > .prepared-to-delete').remove();
    }
});
