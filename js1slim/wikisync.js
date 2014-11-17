document.getElementById('wikiButton').onclick = renewData;
document.getElementById('wikiClearButton').onclick =
    function (){document.getElementById('wikidata').innerHTML='';};

function renewData() {
    $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {
        page: document.getElementById('navString').value,
        prop: "text"
    }, function (data) {
        document.getElementById('wikidata').innerHTML=data.parse.text['*'];
    });
}
