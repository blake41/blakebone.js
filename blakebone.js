var View = function() {
	this.callbackFunc = function() {
		alert('hey');
	}
}

(function() {
	var Blakebone = {};
	window.Blakebone = Blakebone;
	var Events = Blakebone.Events = {
		on : function(name, callback) {
			this.callbacks[name] = callback;
		},
		trigger : function(name) {
			this.callbacks[name]()
		},
		callbacks : {}
	}
}())

var obj = {}
var view = new View
_.extend(obj, Blakebone.Events)
obj.on("X", View.callbackFunc)
obj.trigger("X")