var car , carA;
var bike , bikeA;
var BGG;
var SBG ;   
var D;
var BG;
var SBP , SBPA ;
var SCP ,SCPA ;
var btn1 , BTN1A;
var btn2 , BTN2A ;
var btn3 , BTN3A;
var btn4 , BTN4A ;
var M ,m ;
var gameState=0;


function preload(){
    bikeA=loadAnimation("sb1.png","sb2.png","sb3.png","sb4.png");
    carA = loadAnimation("sc2.png","sc2.png","sc3.png","sc4.png");
    BGG = loadImage("bgg.jpg"); 
    SBG = loadImage("sbg.png");
    D = loadImage("d.jpg");
    BG = loadImage("bg.jpg");
    SBPA = loadImage("sbp.png");
    SCPA = loadImage("scp.png");
    BTN1A = loadImage("b1.png");
    BTN2A = loadImage("b2.png");
    BTN3A = loadImage("b3.png");
    BTN4A = loadImage("b4.png");
    m=loadImage("m.png");    
}
function setup(){
    database = firebase.database();
    createCanvas(1000,400);

player1 = new Player();

    // adding sprites 

    bike = createSprite(380,200);
    bike.addAnimation("bikes",bikeA);
    bike.visible=false;

    car = createSprite(380,100);
    car.addAnimation("cars",carA);
    car.visible=false;

    SBP = createSprite(380,200);
    SBP.addAnimation("bikes",SBPA);
    SBP.visible=false;

    SCP=createSprite(380,100);
    SCP.addAnimation("cars",SCPA);
    SCP.visible=false;

    M=createSprite(0,200);
    M.scale=6.0;
    M.addImage("pg",m)
    M.visible=false;

    // adding buttons 
    btn1 = createSprite(90,130);
    btn1.addImage("s1",BTN1A);
    btn1.visible = false;

    btn2 = createSprite(90,290);
    btn2.addImage("s2",BTN2A);
    btn2.visible = false;

    btn3 = createSprite(90,130);
    btn3.addImage("s3",BTN3A);
    btn3.visible = false;

    btn4 = createSprite(90,290);
    btn4.addImage("s4",BTN4A);
    btn4.visible = false;



}

function draw(){
    background(SBG);
    // game state change function for background

    //gs2
    if(keyCode==32){
        gameState=2;
        player1.updategameState(2);
        gs2();
    }

    //gs3      &     gs4
    if(mousePressedOver(btn1)){
        player1.updategameState(3);
        gameState=3
        gs2sb();
       
    } 
    if(mousePressedOver(btn2)){
        gameState=4
        gs2sc();
    } 
    if(mousePressedOver(btn3)){
        gameState=5;
        gs3sb();
    }
    if(mousePressedOver(btn4)){
        gameState=6;
        gs3sc();
    }

    // gs5
    console.log(gameState)

    drawSprites();    
}



// seperate function for game state change 
function gs2() {
    
    background(D);
    SBP.x=100;
    SBP.y=80;
    SBP.visible=true;
    SBP.scale=0.6;
    btn1.visible=true;
    // after destroying
    btn3.visible=true;
        

    SCP.x=100;
    SCP.y=240;
    SCP.visible=true;
    SCP.scale= 0.6;
    btn2.visible=true;
    //   after destroying   
    btn4.visible=true;

    
}
function gs2sb() {
    background(D);
    SBP.x=100;
    SBP.y=80;
    SBP.scale=0.6;
    SBP.visible=true;
    SCP.destroy();
    btn2.destroy();
    btn1.destroy();
    btn3.visible=true;
    btn4.destroy();
    
}
function gs2sc() {

    background(D);
    SCP.x=100;
    SCP.y=240;
    SCP.scale= 0.6;
    SCP.visible=true;
    SBP.destroy();
    btn2.destroy();
    btn1.destroy();
    btn4.visible=true;
    btn3.destroy();
}
function gs3sb(){
    background(BGG)  
    M.visible=true;
    SBP.destroy();
    btn3.destroy();
    
}
function gs3sc(){
    background(BGG)
    M.visible=true;
    SCP.destroy();
}

