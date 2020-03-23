
class MakeCircle {
	constructor(arrayColorVariable) {
		this.color = arrayColorVariable  
		this.selected = false
	}
}

class Player {
	constructor(num){
		this.playerNum = num
		this.score = 0   
	}						
}								


const game = {
			
	circlesArray: [],
	numCircles: 9,	
	selectDisplayedRgb: "",
	colorsArray: [],
	multiplayer: false,
	playersArr: [],
	activePlayer: null,
	
	
	onePlayerInit: function() {
		const player1 = new Player("one")
		this.playersArr.push(player1)
		this.activePlayer = this.playersArr[0]							
	},

	twoPlayerInit: function() {
		const player1 = new Player("one")
		this.playersArr.push(player1)
		const player2 = new Player("two")
		this.playersArr.push(player2)
		this.activePlayer = this.playersArr[0]
	},	

	switchActivePlayer: function() {
		if(this.playersArr.length >= 2){
			if(this.activePlayer === this.playersArr[0]){
				this.activePlayer = this.playersArr[1]
				messageDisplay.textContent = "Player 2's Guess"
				console.log("player 1 turn")
			} else {
				this.activePlayer = this.playersArr[0]
				messageDisplay.textContent = "Player 1's Guess"
				console.log("player 2 turn")
			}
		} else {
			this.activePlayer = this.playersArr[0]
		}
	},

	startGame: function(){
		let messageDisplay = document.querySelector("#message");
		messageDisplay.textContent = "Choose Player Mode";
	},


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

	displayScores: function(){
		if(game.playersArr.length >= 2){
			const p1score = document.getElementById("playerOneScore")
			console.log(p1score)
			p1score.innerHTML = `Player 1 Score: ${game.playersArr[0].score}`          
			const p2score = document.getElementById("playerTwoScore")				
			console.log(p2score)													
			p2score.innerHTML = `Player 2 Score: ${game.playersArr[1].score}`
		} else {
			const p1score = document.getElementById("playerOneScore")
			console.log(p1score)
			p1score.innerHTML = `Player 1 Score: ${game.playersArr[0].score}`
		}
	},

	compareSelection: function(selectedCircle) {   
		let anchorRgb = document.getElementById("displayedRGB").innerText
		const winningColor = anchorRgb.toLowerCase()
		console.log(selectedCircle)
		const statusMessage = document.getElementById("status")
		if(selectedCircle === winningColor){
			statusMessage.textContent = "You have a match!"
			this.activePlayer.score = this.activePlayer.score + 1
		} else {
			statusMessage.textContent = "Not a match!"
		}
		game.displayScores()
		game.checkWin()
	},


	checkWin: function() {
		if(this.activePlayer.score <3){
			game.switchActivePlayer()
		} else {
			let messageDisplay = document.querySelector("#message");
			messageDisplay.textContent = "You won!"
		}
	},



	reset: function() {   
		game.randColorArray(9)
		game.fillCircle()  
		let newRgb = document.querySelector("h2>span")
		displayedRgb = game.selectDisplayedRgb()
		newRgb.textContent = displayedRgb
	},

	randColorArray: function(num){ 
		this.colorsArray = []
		for(let i = 0 ; i < num ; i++){
			let randomCol = this.randColor();
			this.colorsArray.push(randomCol); 
		}
	},
	

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


game.randColorArray 
game.colorsArray
game.selectDisplayedRgb









let messageDisplay = document.querySelector("#message");

const circlesContainer = document.querySelector("#container")
const selectedCircle = "you clicked a circle"
circlesContainer.addEventListener('click', (event) => {
	let pickMeAWinner = event.target.style.backgroundColor
	game.compareSelection(pickMeAWinner)
	console.log(event.target)
	game.reset()
})

const resetButton = document.querySelector("#reset")
resetButton.addEventListener('click', (event) => {
	game.reset()
})

const onePlayerButton = document.querySelector("#one")
onePlayerButton.addEventListener('click', (event) => {
	messageDisplay.textContent = "One Player Mode"
  	console.log("One Player Button was clicked!")
  	game.onePlayerInit()
})

const twoPlayerButton = document.querySelector("#two")
twoPlayerButton.addEventListener('click', (event) => {
	messageDisplay.textContent = "Two Player Mode"
	game.twoPlayerInit()
})










