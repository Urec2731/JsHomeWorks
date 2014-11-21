document.getElementById('contacts').onclick= myClick;


function myClick (event){
    var target = event.target || event.srcElement;

    if (target.nodeName.toString()=='LI')
        target.className= (target.className)?'':'prepared to delete';

    if(target.className.toString()=='DelButton')
        target.parentNode.parentNode.removeChild(target.parentNode);

    if(target.className.toString()=='DelAll Selected')
       for(i=0;i<target.parentNode.childNodes.length;i++)
           if(target.parentNode.childNodes.item(i).className == 'prepared to delete')
               target.parentNode.removeChild(target.parentNode.childNodes.item(i));


}