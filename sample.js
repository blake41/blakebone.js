// define some object that will contain a defaults object with properties of the model we want to create
// define any functions we want on the object were going to create
// define an init function that will be invoked when we call new
// setup any listeners in the init function
// if we set an attribute of an object, it will trigger the "change:attributeName" event

var gameobj = {
	defaults : {
		name : "blake"
	},
	sayHello : function() {
		alert('hey')
	},
	init : function() {
		this.aProp = 'yo yo yo'
	}
}
var viewobj = {
	defaults : {
		name : "bob"
	},
	respondToName : function() {
		alert('name changed')
	},
	init : function() {
		this.someProp = 'hello'
		this.game = new Game
		this.game.on("change:name", this.respondToName)
		this.game.on("X", function() {alert('some callback')})
	}
}
var Game = Blakebone.Model.extend(gameobj)
var View = Blakebone.Model.extend(viewobj)
var view = new View
view.set("name") //this should trigger the callback and say "name changed"
view.game.trigger("X")

