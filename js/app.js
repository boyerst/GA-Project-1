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
	winConditionColor: "",

	fillCircle: function(color, selected){
		//let circle = new RandomCircle(this.randColor)
		
		for(let i = 1; i <= this.numCircles; i++){
			let circle = new MakeCircle(this.randColor())
			this.circlesArray.push(circle)
		}
	},	


		
//selectWinCondition: function(){
			//loop over randomCircles array and pick one, then print that rgb val to the screen
		//}


//function for user to reset all box colors 
			// reset: function() {     
		
			// }











//function to make array of random colors from the random color generator
	randColorArray: function(num){
		array = []
		for(var i = 0 ; i < num ; i++){
			array.push(randColor());
		}
		return array;
			
},




//function to generate random colors
	randColor: function(){
		let r = Math.floor(Math.random() * 256);
	
		let g = Math.floor(Math.random() * 256);
	
		let b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
		
	}

}

game.fillCircle()
console.log(game.circlesArray)







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

const circlesContainer = document.querySelector("#container")
circlesContainer.addEventListener('click', (event) => {
	console.log("A circle was clicked")
	console.log(event)
	console.log("here is event.target")
	console.log(event.target)
	console.log(event.currentTarget)
})





















