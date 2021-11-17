var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//Coloca cor nos quadrados
	squares[i].style.backgroundColor = colors[i];

	//Colocando click listener nos quadrados.
	squares[i].addEventListener("click", function(){
		//Pega a cor onde foi clicado
		var clickedColor = this.style.backgroundColor;

		//Compara a cor com a pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Acertou!";
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Errou! Tente denovo.";
		}

	});
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}