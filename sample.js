var View = function() {
	this.callbackFunc = function() {
		alert('hey');
	}
}

var obj = {}
var view = new View
_.extend(obj, Blakebone.Events)
obj.on("X", view.callbackFunc)
obj.trigger("X")