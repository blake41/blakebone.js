var Game = function() {
	this.callbacks = {}
}
Game.prototype.on = function(name, callback) {
	this.callbacks[name] = callback
}
Game.prototype.trigger = function(name) {
	this.callbacks[name]()
}
var View = function() {
	this.callbackFunc = function() {
		alert('hey');
	}
}
var view = new View
var game = new Game

(function() {
	var Blakebone = {};
	window.Blakebone = Blakebone;
	Blakebone.Events = {
		on : function() {alert('hey')},
		trigger : function() {alert('triggered')}
	}
}())

obj = {}
_.extend(obj, Blakebone.Events)