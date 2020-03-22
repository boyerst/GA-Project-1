
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

class Player{
	constructor(num){
		this.playerNum = num
		this.score = 0    //have two separate to keep track of two active players?
	}
}


// const newDude = new Player(1)
// const twoDude = new Player(2)
// console.log(newDude)
// console.log(twoDude)
//this 
// switchActivePlayer: function(){
// 	if(this.activePlayer === this.players[0]){
// 		this.activePlayer = this.players[1]
// 	} else {
// 		this.activePlayer = this.players[0]
// 	}
// }

// this.switchActivePlayer()

const game = {
			
	circlesArray: [],
	numCircles: 9,	
	selectDisplayedRgb: "",
	colorsArray: [],
	playerScore: 0,
	multiplayer: false,
	playersArr: [],
	activePlayer: null,

	startGame: function(){
		let messageDisplay = document.querySelector("#message");
		messageDisplay.textContent = "Choose Player Mode";
		game.randColorArray(9)
		game.fillCircle()
		game.selectDisplayedRgb()
		game.reset()
	},

	
	onePlayerInit: function() {
		// game.startGame()
		game.randColorArray(9)
		game.fillCircle()
		game.selectDisplayedRgb()
		game.reset()
		//make it so this button instantiates one player
		const player1 = new Player("one")
		this.playersArr.push(player1)
	},

	twoPlayerInit: function() {
		const player1 = new Player("one")
		this.playersArr.push(player1)
		const player2 = new Player("two")
		this.playersArr.push(player2)

		game.createPlayer()
		// game.randColorArray(9)
		// game.fillCircle()
		// game.selectDisplayedRgb()
		// game.createPlayer()
		game.twoPlayerMode()
		// game.reset()
	},	
	
	createPlayer: function() {
		// //this goes into a player creation function inside the game
		const newPlayerOne = new Player(1)
		const newPlayerTwo = new Player(2)
		// //these lines are also inside that same func
		this.playersArr.push(newPlayerOne)
		this.playersArr.push(newPlayerTwo)
		//this function will assign the first item of the playersArr as the active player
		const newDude = new Player(1)
		const twoDude = new Player(2)
		console.log(newPlayerOne)
		console.log(newPlayerTwo)
		// game.twoPlayerMode()
	},

	switchActivePlayer: function() {
		if(this.playersArr.length >= 2){
			if(this.activePlayer === this.playersArr[0]){
				this.activePlayer = this.playersArr[1]
				messageDisplay.textContent = "Player 2"
			// game.twoPlayerMode()

			} else {
				this.activePlayer = this.playersArr[0]
				messageDisplay.textContent = "Player 1"
				// game.twoPlayerMode()
			}
		} else {
			this.activePlayer = this.playersArr[0]
		}
		
		// game.reset()
		// game.twoPlayerMode()
	},
	//this is for two player: if active is 1, switch to 2, else if active is 2 switch to one
	// this.switchActivePlayer()


	fillCircle: function(color, selected){
		for(let i = 1; i <= this.numCircles; i++){
			let circle = new MakeCircle(this.randColor())
			this.circlesArray.push(circle)
		}
		let circles = document.getElementsByClassName("circle")
		for(let i = 0; i < circles.length; i++){
			circles[i].style.backgroundColor = this.colorsArray[i] 
		}											
	},													
														
		
	selectDisplayedRgb: function(){
		let randomRgb = Math.floor(Math.random() * this.colorsArray.length)
		return this.colorsArray[randomRgb]
		console.log(randomRgb)	
	},

	twoPlayerMode: function() {
		let anchorRgb = document.getElementById("displayedRGB").innerText
		const winningColor = anchorRgb.toLowerCase()
		if(selectedCircle === winningColor){
				messageDisplay.textContent = "You have a match! Next player..."
				this.score = this.score + 1//game.activePlayerScore[i] +=   ???
				const section = document.querySelector('#scoreBoard')
				section.innerHTML = `Player Score: ${this.score}`
				console.log(`${this.score}`)
					if(this.score < 3){
						// game.switchActivePlayer()						
					}else{
						messageDisplay.textContent = "You won!"
						}
			}else{
				messageDisplay.textContent = "Not a match!"
				// game.switchActivePlayer()
		}
		game.switchActivePlayer()
		// game.twoPlayerMode()
	},

	compareSelection: function(selectedCircle) {   
		let anchorRgb = document.getElementById("displayedRGB").innerText
		const winningColor = anchorRgb.toLowerCase()
		if(selectedCircle === winningColor){
				messageDisplay.textContent = "You have a match! Take another shot..."
				this.playerScore = this.playerScore + 1
				const section = document.querySelector('#scoreBoard')
				section.innerHTML = `Player Score: ${this.playerScore}`
				console.log(`${this.playerScore}`)
					if(this.playerScore < 3){
						game.reset()						
					}else{
						messageDisplay.textContent = "You won!"
						}
			}else{
				messageDisplay.textContent = "Not a match! Click New Colors to Try Again"
				// let losingColor = document.querySelectorAll("div.gameboard")
				// console.log(losingColor)
				// selectedCircle.style.backgroundColor = "black"
		}
	},


	reset: function() {   
		game.randColorArray(9)
		game.fillCircle()  
		let newRgb = document.querySelector("h2>span")
		displayedRgb = game.selectDisplayedRgb()
		newRgb.textContent = displayedRgb

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
// game.randColorArray(9)
// game.fillCircle()
// game.selectDisplayedRgb()
// game.reset()


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
let selectedCircle = "you clicked a circle"
for(let i = 0; i < circlesContainer.length; i ++){
	circlesContainer[i].addEventListener('click', (event) => {
		let pickMeAWinner = event.target.style.backgroundColor
		if(game.playersArr.length > 0){
			game.twoPlayerMode()
		}else{
		game.compareSelection(pickMeAWinner)
	
}

})
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
	messageDisplay.textContent = null
  	// let circles = document.querySelector('div#container')		
	// circlesContainer.style.background = "black"
  	// console.log(event.target)
  	// console.log(event.currentTarget)
})

const onePlayerButton = document.querySelector("#one")
onePlayerButton.addEventListener('click', (event) => {
	messageDisplay.textContent = "One Player Mode: Match 3-in-a-row to Win!"
	game.onePlayerInit()
	// console.log("One Player Button was clicked!")
  	// console.log(event.target)
  	// console.log(event.currentTarget)
})

const twoPlayerButton = document.querySelector("#two")
twoPlayerButton.addEventListener('click', (event) => {
	messageDisplay.textContent = "Two Player Mode"
	game.twoPlayerInit()
  	// console.log(event.target)
  	// console.log(event.currentTarget)
})
}













