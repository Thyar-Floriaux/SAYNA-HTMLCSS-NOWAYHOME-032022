var suite = "SUPER VILAINS";
var ordre = suite.split("");
var temps;

function frameLooper () {
	if (ordre.length > 0) {
		document.getElementById("text").innerHTML += ordre.shift();
	} else {
		clearTimeout(temps);
			}
	loopTemps = setTimeout('frameLooper()',120); 

}
frameLooper();
//hover Media
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const collectionOfLogo = [
    ["./assets/logo/logof.png", "./assets/logo/logoi.png", "./assets/logo/logot.png", "./assets/logo/logoy.png"],
    ["./assets/logo/logof-white.png", "./assets/logo/logoi-white.png", "./assets/logo/icon_tw.png", "./assets/logo/logoy-white.png"]
];

img1.addEventListener("mouseover", () => {img1.src = collectionOfLogo[1][0]});
img1.addEventListener("mouseout", () => {img1.src = collectionOfLogo[0][0]});

img2.addEventListener("mouseover", () => {img2.src = collectionOfLogo[1][1]});
img2.addEventListener("mouseout", () => {img2.src = collectionOfLogo[0][1]});

img3.addEventListener("mouseover", () => {img3.src = collectionOfLogo[1][2]});
img3.addEventListener("mouseout", () => {img3.src = collectionOfLogo[0][2]});

img4.addEventListener("mouseover", () => {img4.src = collectionOfLogo[1][3]});
img4.addEventListener("mouseout", () => {img4.src = collectionOfLogo[0][3]});

var btn= document.querySelectorAll('.card-content, .card-title')
for ( let i=0; i<btn.length; i++ ){
btn[i].addEventListener("mouseover",hover)

 function hover(){
    btn[i].style.backgroundColor="black"
    btn[i].style.color="white"
	btn[i].style.fontSize="bold"
    
        
}
btn[i].addEventListener("mouseout",unblurt)
function unblurt()
{
    btn[i].style.backgroundColor="transparent"
    btn[i].style.color="transparent"

}

}
