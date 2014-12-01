Number.prototype.sum= function (arg){return this+arg};

var x= 10 , y= 20;
console.log('x='+ x);
console.log('y='+ y);
console.log('x.sum(y)='+x.sum(y));
console.log('x.sum(y) === x+y is ' + (x.sum(y) === x+y));
console.log('///////////////////////////////////////////');
///////////////////////////////////////////
jQuery.fn.hasAttr= function (Attr){return this.attr(Attr)!== undefined;};


setTimeout( function(){
        console.log("jQuery('body').hasAttr('class') = "   + jQuery('body').hasAttr('class'));
        console.log("jQuery('body').hasAttr('title') = "   + jQuery('body').hasAttr('title'));
        console.log("jQuery('body').hasAttr('onclick') = " + jQuery('body').hasAttr('onclick'));
        console.log("jQuery('body').hasAttr('style') = "   + jQuery('body').hasAttr('style'));

    }
    ,200);
