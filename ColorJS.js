	var numofsq=6;  // used to keep track of which mode we are in.
	var colors=[];
	var pickedcolor;
	var squares= document.querySelectorAll(".square");
	var colordisplay=document.getElementById("colordisplay");
	var messagedisplay=document.querySelector("#message");
	var h1=document.querySelector("h1");
	var resetbutton=document.querySelector("#reset");
	var modebutton=document.querySelectorAll(".mode");
  	colordisplay.textContent=pickedcolor; // showing content (0 , 0, 0)

init();
function init(){
setupModeButton();
setupsquares();
reset();
}

function setupModeButton(){
for(var i=0;i<modebutton.length;i++){
	modebutton[i].addEventListener("click",function(){
		modebutton[0].classList.remove("selected");
		modebutton[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "easy" ? numofsq=3: numofsq=6;
/*if(this.textContent==="Easy"){
	numofsq=3;
}else{
	numofsq=6;
}*/
reset();	
		});
	}
}
function setupsquares(){
for(var i=0;i<squares.length;i++){
	//add init colors to squares
// add click listeners to squres
squares[i].addEventListener("click", function(){
	//grab color of clicked square

	var clickedcolor=this.style.backgroundColor;
	// compare color to pickedColor
		if(clickedcolor===pickedcolor){
			messagedisplay.textContent="Correct!";
			h1.style.backgroundColor=clickedcolor;
			resetbutton.textContent="Play Again";
			//alert(correct)
			changeColor(clickedcolor);
		}
		else{
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="Try again";
			//alert("incorrect");
		}



});
}
}

function reset(){
	console.log(colors.length);
	colors=generateRandomcolor(numofsq);
	//pick a new random color from array
	pickedcolor=pickrancolor();
	colordisplay.textContent=pickedcolor;
	resetbutton.textContent="New Colors";
	messagedisplay.textContent="";
	//change colors of squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}	
	h1.style.background="steelblue";
}
resetbutton.addEventListener("click",function(){
reset();
});


function changeColor(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor=color;
	}
}
function pickrancolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomcolor(num){
	//make a array
	var arr=[];

	//add num random colors to array
	for(var i=0;i<num;i++){
		//get random color and push into array
		arr.push(randomcolor());
	}
	//return that arryay
	return arr;
}
	function randomcolor(){
	//pick a red from 0-255
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256); //0-255
	return "rgb(" + r + ", " + g + ", " + b + ")"; // very weird way of returning 
			}