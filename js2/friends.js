$('#contacts').click(function (event){
    event.stopPropagation();
    var target = event.target || event.srcElement;

    if (target.nodeName.toString()=='LI'){
        $(target).toggleClass('prepared to delete');
    };

    if(target.className.toString()=='DelButton'){
        $(target.parentNode).remove();
    };

    if(target.className.toString()=='DelAll Selected'){
        $('#contacts>.prepared.to.delete').remove();
    };
});