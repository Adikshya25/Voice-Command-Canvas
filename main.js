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

if(content=="circle"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*500);
    document.getElementById("status").innerHTML="Started drawing circle.";
    draw_circle="set";   
}

if(content=="rectangle"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*500);
    document.getElementById("status").innerHTML="Started drawing rectangle.";
    draw_rect="set";   
}

if(content=="square"){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*500);
    document.getElementById("status").innerHTML="Started drawing square.";
    draw_square="set";   
}

if(content=="ellipse"){
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
        fill("green");
        radius= Math.floor(Math.random()*200);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Circle drawn";
        draw_circle="";

    }

    if (draw_rect=="set"){
        fill("red");
        rect(x, y, 100, 80);
        document.getElementById("status").innerHTML="Rectangle drawn";
        draw_rect="";
        
    }

    if (draw_square=="set"){
        fill("orange");
        rect(x, y, 100, 100);
        document.getElementById("status").innerHTML="Square drawn";
        draw_square="";
        
    }

    if (draw_ellipse=="set"){
        fill("yellow");
        ellipse(x, y, 150, 80);
        document.getElementById("status").innerHTML="Ellipse drawn";
        draw_ellipse="";
        
    }

    if (draw_triangle=="set"){
        fill("blue");
        triangle(x, y, x+50, y+20, 310, 350);
        document.getElementById("status").innerHTML="Triangle drawn";
        draw_triangle="";
        
    }

    
}



