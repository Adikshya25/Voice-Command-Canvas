x=0;
y=0;

draw_rect="";
draw_circle="";
draw_square="";
draw_ellipse="";
draw_triangle="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML= "System is listening please speak the shape name!!";
    recognition.start();
}

recognition.onresult = function(event){
console.log(event);

var content= event.results[0][0].transcript;

document.getElementById("status").innerHTML="The speech has been recognized as: " + content;

if(content=="Circle"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*500);
    document.getElementById("status").innerHTML="Started drawing circle.";
    draw_circle="set";   
}

if(content=="Rectangle"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*500);
    document.getElementById("status").innerHTML="Started drawing rectangle.";
    draw_rect="set";   
}

if(content=="Square"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*500);
    document.getElementById("status").innerHTML="Started drawing square.";
    draw_square="set";   
}

if(content=="Ellipse"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*500);
    document.getElementById("status").innerHTML="Started drawing ellipse.";
    draw_ellipse="set";   
}

if(content=="Triangle"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*500);
    document.getElementById("status").innerHTML="Started drawing triangle.";
    draw_triangle="set";   
}
}

function setup(){
    canvas= createCanvas(900,500);
}

function draw(){
    if (draw_circle=="set"){
        radius= Math.floor(Math.random()*200);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Circle drawn";
        draw_circle="";

    }

    if (draw_rect=="set"){
        
        rect(x, y, 100, 80);
        document.getElementById("status").innerHTML="Rectangle drawn";
        draw_rect="";
        
    }

    if (draw_square=="set"){
        
        square(x, y, 100, 100);
        document.getElementById("status").innerHTML="Square drawn";
        draw_square="";
        
    }

    if (draw_ellipse=="set"){
        
        ellipse(x, y, 80, 80);
        document.getElementById("status").innerHTML="Ellipse drawn";
        draw_ellipse="";
        
    }

    if (draw_triangle=="set"){
        
        triangle(x, y, 320, 100, 310, 80);
        document.getElementById("status").innerHTML="Triangle drawn";
        draw_triangle="";
        
    }

    
}



