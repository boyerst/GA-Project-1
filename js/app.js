
class MakeCircle {
	//class RandomBox, produces an object, a box with a single random color.
	//inside the GAME object, you'll initialze these boxes, and store them to an array
	constructor(arrayColorVariable) {
		this.color = arrayColorVariable  //arrayColorVariable for value?
		this.selected = false
		// this.userPickedColor = userPickColor
		// this.displayedRgb = 
		// this.circle = circle
		// this.clickedColor = 
		// console.log(arrayColorVariable)
	}
}

const game = {
			
	circlesArray: [],
	numCircles: 9,	
	selectDisplayedRgb: "",
	colorsArray: [],
	playerScore: 0,
	
	


	startGame: function(){
		let messageDisplay = document.querySelector("#message");
		messageDisplay.textContent = "Choose Player Mode";
	},


	fillCircle: function(color, selected){
		for(let i = 1; i <= this.numCircles; i++){
			let circle = new MakeCircle(this.randColor())
			this.circlesArray.push(circle)
			console.log(circle.color)
		}
		let circles = document.getElementsByClassName("circle")
		for(let i = 0; i < circles.length; i++){
			circles[i].style.backgroundColor = this.colorsArray[i] 
			console.log(circles[i].style.backgroundColor)

		}												
	},													
														
		
	selectDisplayedRgb: function(){
		let randomRgb = Math.floor(Math.random() * this.colorsArray.length)
		return this.colorsArray[randomRgb]
		console.log(randomRgb)	
	},



	compareSelection: function(selectedCircle) {   
		let anchorRgb = document.getElementById("displayedRGB").innerText
		const winningColor = anchorRgb.toLowerCase()
		if(selectedCircle === winningColor){
				messageDisplay.textContent = "You have a match! Click New Colors to Play Again"
				console.log("You have a match!")
				this.playerScore = this.playerScore + 1
				const section = document.querySelector('#scoreBoard')
				section.innerHTML = `Player Score: ${this.playerScore}`
				console.log(`${this.playerScore}`)
				// game.reset()
			}else{
				messageDisplay.textContent = "Not a match!"
				console.log("Not a match!")

		}

	},

	reset: function() {   
		game.randColorArray(9)
		game.fillCircle()  
		let newRgb = document.querySelector("h2>span")
		console.log(newRgb)
		displayedRgb = game.selectDisplayedRgb()
		newRgb.textContent = displayedRgb
		console.log(displayedRgb)
	},

//function to make array of random colors from the random color generator
	randColorArray: function(num){ 
		this.colorsArray = []
		for(let i = 0 ; i < num ; i++){
			let randomCol = this.randColor();
			this.colorsArray.push(randomCol); 
		}
	},
		//DONT NEED...for now
	// 	ranNumMax = this.colorsArray.length - 1
	// 	console.log(ranNumMax)

	// 	this.selectDisplayedRgb = this.colorsArray[Math.floor(Math.random() * ranNumMax)]
	
	// 	return this.colorsArray;

	randColor: function(){
		let r = Math.floor(Math.random() * 256);
	
		let g = Math.floor(Math.random() * 256);
	
		let b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
		
	}
}



game.startGame()
game.randColorArray(9)
game.fillCircle()
game.selectDisplayedRgb()
game.reset()


game.randColorArray //(have to call first w value?)
game.colorsArray
game.selectDisplayedRgb







//listeners

// const reset = document.querySelector("#reset")
// reset.addEventListener('click', (game.reset()) )

// 	=> {





//make a click event listener that console logs the event target
// const logCircleClick = () => {
// 	const click = new Click()
// 	console.log(click + ": there was a click on a circle");
// }
// const circleDiv = document.querySelectorAll("circle")
// circleDiv.addEventListener('click', logCircleClick)

// const circlesContainer = document.querySelector("#container")
// circlesContainer.addEventListener('click', (event) => {
// 	console.log("A circle was clicked")
// 	console.log(event.target)
// 	console.log(event.currentTarget)
// })

let messageDisplay = document.querySelector("#message");


const circlesContainer = document.querySelectorAll("div.circle")
console.log(circlesContainer)
let selectedCircle = "you clicked a circle"
for(let i = 0; i < circlesContainer.length; i ++){
	circlesContainer[i].addEventListener('click', (event) => {
		let pickMeAWinner = event.target.style.backgroundColor
		game.compareSelection(pickMeAWinner)
		console.log(event.target)
	})
}


//whenever you get your click to log the rgb of the background color
//maybe set that to a variable and pass that as the argument of the function
//compareSelection(selectCircleRGBVal)


//this was in the loop and printed the background colors
// console.log(circlesContainer[i].style[0])
// circlesContainer.addEventListener('click', (event) => {
// 	console.log("A circle was clicked")
	
	// console.log("THIS IS THE CURRENTTARGET\N", event.currentTarget)

// })


const resetButton = document.querySelector("#reset")
resetButton.addEventListener('click', (event) => {
	game.reset()
  	// let circles = document.querySelector('div#container')		
	// circlesContainer.style.background = "black"
  	console.log(event.target)
  	console.log(event.currentTarget)
})

const onePlayerButton = document.querySelector("#one")
onePlayerButton.addEventListener('click', (event) => {
	messageDisplay.textContent = "One Player Mode"
  	console.log("One Player Button was clicked!")
  	console.log(event.target)
  	console.log(event.currentTarget)
})

const twoPlayerButton = document.querySelector("#two")
twoPlayerButton.addEventListener('click', (event) => {
	messageDisplay.textContent = "Two Player Mode"
  	console.log(event.target)
  	console.log(event.currentTarget)
})














