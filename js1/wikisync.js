
var KrutilkaInit=  function() {
    $(function () {
        $('#krutilka').krutilka();
    });
};

var isKrutilka;
function krutilkaTrue(){
    if (isKrutilka==undefined){KrutilkaInit();isKrutilka=true;}
    else {$('#krutilka').trigger('show');isKrutilka=true;}}
function krutilkaStop(){$('#krutilka').trigger('hide');isKrutilka=false;}
////////////////////////////////////////////////////////////////////////////

var DataObj=null;
var NavStrObj={value:'Red Sea clownfish'};
document.getElementById('wikiButton').onclick = clickShop;
document.getElementById('wikiClearButton').onclick = clearShop;
document.getElementById('navString').value = NavStrObj.value;
document.getElementById('navString').onchange = function (){NavStrObj.value=this.value};
setTimeout(renewData,700);

function renewData() {
    $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {
        page: NavStrObj.value,
        prop: "text"
    }, function (data) {
        console.log(data);
        DataObj=data;
        if (isKrutilka) {krutilkaStop();clickShop();}
    })
}


function clickShop () {
    if (DataObj!=null){
        document.getElementById('wikidata').innerHTML=DataObj.parse.text['*'];
        DataObj=null;
    } else {krutilkaTrue(); setTimeout( renewData(),100)};
}

function clearShop (){
    document.getElementById('wikidata').innerHTML='';
    DataObj=null;
}