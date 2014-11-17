var NavStrObj={value:'Red Sea clownfish'};
document.getElementById('wikiButton').onclick = renewData;
document.getElementById('wikiClearButton').onclick =
    function (){document.getElementById('wikidata').innerHTML='';};
document.getElementById('navString').value = NavStrObj.value;
document.getElementById('navString').onchange = function (){NavStrObj.value=this.value};

function renewData() {
    $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {
        page: NavStrObj.value,
        prop: "text"
    }, function (data) {
        document.getElementById('wikidata').innerHTML=data.parse.text['*'];
    });
}
