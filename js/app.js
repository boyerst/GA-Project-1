console.log("linked")

//so you need an array of rgb values, for the boxes.
//You also need to be able to 
//		select one item from the array at random, 
//		and set that to be the game winner value
//You need whatever selector/eventListeners to be able to collect the info 
//		from the clicked(selected) element.

//maybe each box that is created is an instance of the randomBoxes class,
//and they have a k:v pair that is a boolean
//when clicked, that RandomBox.selected is made true

//////////////////////////////
//	Typically speaking, format for a game will go like this
		//classes(optional)
		//objects(optional)
		//THE GAME OBJECT
		//Event listeners



class MakeCircle {
	//class RandomBox, produces an object, a box with a single random color.
	//inside the GAME object, you'll initialze these boxes, and store them to an array
	constructor(arrayColorVariable) {

	
		this.color = arrayColorVariable,  //arrayColorVariable for value?
		this.selected = false
		// this.userPickedColor = userPickColor
		// this.displayedRgb = 
		// this.circle = circle
		// this.clickedColor = 
	}
}


//game logic
const game = {
			
	circlesArray: [],
	numCircles: 9,	
	selectDisplayedRgb: "",
	colorsArray: [],


	//fill colorsArray 
	//use the colorsArray to fill the circl



	fillCircle: function(color, selected){
		//let circle = new RandomCircle(this.randColor)
		
		for(let i = 1; i <= this.numCircles; i++){
			let circle = new MakeCircle(this.randColor())
			this.circlesArray.push(circle)
		}
	},	


		
	// selectDisplayedRgb: function(){
	// 	let randomRgb = Math.floor(Math.random() * colorsArray.length)
	// 	console.log(randomRgb)
	// 	return randomRgb //??		
	// 	// colorsArray.push(randomRgb)
	// 		//loop over circlesArray and pick one, then print that rgb val to the screen
	// },



	// reset: function() {     
	// 	let rgbDisplay = document.querySelector(#message)
	// 	selectedColor = selectDispalyedRgb()
	// 	displayedRgb.textContent = selectedColor
	// }
	//within reset, will need to call on randColorArray for 
				//single RGB value
				//


	//selectDisplayedRgb for single RGB color + 




//function to make array of random colors from the random color generator
	randColorArray: function(num){ //just num? not numCircles? array not populating
		this.colorsArray = []
		for(let i = 0 ; i < num ; i++){//just num? not numCircles?
			//console.log(this.colorsArray)
			this.colorsArray.push(this.randColor()); //this.colors...?
		}

		ranNumMax = this.colorsArray.length - 1
		console.log(ranNumMax)

		this.selectDisplayedRgb = this.colorsArray[Math.floor(Math.random() * ranNumMax)]
	
		return this.colorsArray;
	},








//function to generate random colors
	randColor: function(){
		let r = Math.floor(Math.random() * 256);
	
		let g = Math.floor(Math.random() * 256);
	
		let b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
		// game.randColorArray()
	}


}

game.fillCircle()
console.log(game.circlesArray)
game.randColorArray //(have to call first w value?)
game.colorsArray
game.selectDispalyedRgb







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

const circlesContainer = document.querySelector("div#container")
circlesContainer.addEventListener('click', (event) => {
	console.log("A circle was clicked")
	console.log(event.target)
	console.log(event.currentTarget)
})


const resetButton = document.querySelector("#reset")
resetButton.addEventListener('click', (event) => {

  	console.log("Reset Button was clicked!")
  	console.log(event.target)
  	console.log(event.currentTarget)
})

const onePlayerButton = document.querySelector("#one")
onePlayerButton.addEventListener('click', (event) => {

  	console.log("One Player Button was clicked!")
  	console.log(event.target)
  	console.log(event.currentTarget)
})

const twoPlayerButton = document.querySelector("#two")
twoPlayerButton.addEventListener('click', (event) => {

  	console.log("Two Player Button was clicked!")
  	console.log(event.target)
  	console.log(event.currentTarget)
})














