var View = function() {
	this.callbackFunc = function() {
		alert('hey');
	}
	_.extend(this, Blakebone.Events)
	this.game = new Game
	this.game.on("X", function() {alert('callback')})
}

obj = {
	defaults : {
		name : "blake"
	},
	sayHello : function() {
		alert('hey')
	}
}
var Game = Blakebone.Model.extend(obj)
var game = new Game
var view = new View
view.trigger("X")