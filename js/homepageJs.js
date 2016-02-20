function alertName() {
    var name = prompt("What is your name?");
    return name;
};

jQuery.fn.verticalMarquee = function(vertSpeed, horiSpeed, index) {

    this.css('float', 'left');

    //vertSpeed = vertSpeed || 1;
    //horiSpeed = 1/horiSpeed || 1;

    var windowH = this.parent().height(),
        thisH = this.height(),
        parentW = (this.parent().width() - this.width()) / 2,
        rand = Math.random() * (index * 1000),
        current = this;

    this.css('margin-top', windowH + thisH);
    this.parent().css('overflow', 'hidden');

    function randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    setInterval(function() {
        current.css({
            marginTop: function(n, v) {
                //var y = parseFloat(v) - vertSpeed;
                //console.log(y)
                //return randomIntFromInterval(500,800);
                return 500;//vertSpeed;//parseFloat(v) - vertSpeed;
            },
            marginLeft: function(n, v) {
                var x = (Math.sin(new Date().getTime() / (horiSpeed * 1000) + rand) + 1) * parentW/10;
                console.log(x)
                return x;
            }
        });
    }, 15);

    setInterval(function() {
        if (parseFloat(current.css('margin-top')) < 500) {//-thisH) {
            current.css('margin-top', 500);//windowH + thisH);
        }
    }, 250);
};
var message = 1;
$('.message').each(function(message) {
    $(this).verticalMarquee(2, 2, message);
    message++
});
