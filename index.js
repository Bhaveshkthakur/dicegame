var randomnumber1=Math.floor(Math.random() * 6) + 1;
var diceimage="dice"+ randomnumber1 + ".png";
var imagesourse1="images/"+ diceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesourse1);


var randomnumber2=Math.floor(Math.random()*6)+1;
var imagesourse2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesourse2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player1 win";
}

else{
    document.querySelector("h1").innerHTML="player2 win";
}
