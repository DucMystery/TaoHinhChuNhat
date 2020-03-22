let RectAngle= function (length,width) {
    this.length=length;
    this.width=width;

    this.getLength =function () {
        return length;
    }
    this.getWidth = function () {
        return width;
    }

    this.setLength= function (length) {
        this.length=length;
    }
    this.setWidth= function (width) {
        this.width=width;
    }

    this.getAceage= function () {
        return width*length;
    }
    this.getPerimeter=function () {
        return 2*(width+length);
    }
    this.setRectAngel = function (length,width) {
        this.length=length;
        this.width=width;
    }
    this.createRect = function () {
        let c= document.getElementById("myCanvas").getContext("2d");
        c.fillStyle ="Black";
        c.fillRect(0,0,length,width);
    }
};

let hcn1 = new RectAngle(100,60);
hcn1.createRect();
alert(hcn1.getAceage());//diện tích
alert(hcn1.getPerimeter());//chu vi



