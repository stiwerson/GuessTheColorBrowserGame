var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
	];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

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
			alert("Acertou!");
		}else{
			alert("Errou!");
		}

	});
}