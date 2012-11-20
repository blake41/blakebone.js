(function() {
	var Blakebone = {};
	window.Blakebone = Blakebone;
	var Events = Blakebone.Events = {
		on : function(name, callback) {
			this.callbacks[name] = callback;
		},
		trigger : function(name) {
			this.callbacks[name]();
		},
		callbacks : {}
	}
	var Model = Blakebone.Model = {
		extend : function(atts) {
			if(typeof(atts) !== "undefined") {
				if(typeof(atts["defaults"]) !== "undefined") {
					var props = atts["defaults"];
					delete atts["defaults"];
					var methods = atts;
				}
			}
			else {
				var props = {};
				var methods = {};
			}
			var F = function() {
				_.each(props, function(value, key) {
					this[key] = value;
				}, this)
			};
			_.extend(F.prototype, Events)
			if(typeof(methods) === "object") {
				_.each(atts, function(value, key) {
					if(typeof(value) === "function") {
						F.prototype[key] = value;
					}
				})
			}
			return F;
		}
	}
}())
