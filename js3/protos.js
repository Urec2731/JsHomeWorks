Number.prototype.sum= function (arg){return this+arg};

var x= 10 , y= 20;
console.log('x='+ x);
console.log('y='+ y);
console.log('x.sum(y)='+x.sum(y));
console.log('x.sum(y) === x+y is ' + (x.sum(y) === x+y));
console.log('///////////////////////////////////////////');
///////////////////////////////////////////
jQuery.fn.hasAttr= function (Attr){return this.attr(Attr)!== undefined;};


jQuery( function($){
        console.log("$('body').hasAttr('class') = "   + $('body').hasAttr('class'));
        console.log("$('body').hasAttr('title') = "   + $('body').hasAttr('title'));
        console.log("$('body').hasAttr('onclick') = " + $('body').hasAttr('onclick'));
        console.log("$('body').hasAttr('style') = "   + $('body').hasAttr('style'));

    }
    );
