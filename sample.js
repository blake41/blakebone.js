var gameobj = {
	defaults : {
		name : "blake"
	},
	sayHello : function() {
		alert('hey')
	},
	init : function() {
		this.someProp = 'penis'
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
		this.someProp = 'penis'
		this.game = new Game
		this.game.on("change:name", this.respondToName)
	}
}
var Game = Blakebone.Model.extend(gameobj)
var View = Blakebone.Model.extend(viewobj)
var view = new View
