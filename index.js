let player1 = Math.floor(Math.random()*6)+1;
let player2 = Math.floor(Math.random()*6)+1;

let randomimage1 = "Alea_" + player1 + ".png"
let randomimage2 = "Alea_" + player2 + ".png"
let imagesource1 = "images/"+randomimage1;
let imagesource2 = "images/"+randomimage2;

const btn = document.querySelector("button");

btn.onclick = function compare(){

    if(player1==player2){
        document.querySelector("h1").innerHTML = "Draw !"
    }else{

    if (player1 > player2) {
        document.querySelector("h1").innerHTML = "Player 1 wins !";
        
    }else{
        document.querySelector("h1").innerHTML = "Player 2 wins !";
    }}
    document.getElementById("one").setAttribute("src",imagesource1);
    document.getElementById("two").setAttribute("src",imagesource2);
}

function refresh(){
    window.location.reload();
}
