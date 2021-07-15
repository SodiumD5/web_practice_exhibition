var canvas = document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext('2d');


function diamond(x,y,dy,length){
    this.i=0;
    this.x=x;
    this.first_x=x;
    this.dx=0;
    this.y=y;
    this.dy=dy;
    this.length=length;
    this.draw=function(){
        c.beginPath();
        c.moveTo(this.x,this.y-this.length);
        c.lineTo(this.x+this.length *0.2,this.y);
        c.lineTo(this.x,this.y+this.length);
        c.lineTo(this.x-this.length*0.2,this.y);
        c.lineTo(this.x,this.y-this.length);
        
        c.fill();
    }

    this.update=function(){
        this.y-=this.dy*0.5;
        this.i+=0.05;
        this.dx=this.i*Math.sin(this.i)*5;
        this.x=this.first_x+this.dx;
        this.a=1-this.i*0.03
        c.fillStyle='rgba(255,0,0,'+this.a+')'
        this.draw();
    }
}

var diamondArray=[]

function init(){
    diamondArray=[];

    setInterval(() => {
        var x=Math.random() *innerWidth;
        var length=20;
        var y=innerHeight-length;
        var dy =3;
        diamondArray.push(new diamond(x,y,dy,length));
    }, 1000);
}   


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    for (var i=0; i<diamondArray.length; i++){
        diamondArray[i].update();
    }
    
    
}

init();
animate();