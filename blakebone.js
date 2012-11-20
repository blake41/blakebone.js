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
