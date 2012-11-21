(function() {
	var Blakebone = {};
	window.Blakebone = Blakebone;
	var Events = Blakebone.Events = {
		on : function(name, callback) {
			this.callbacks[name] = callback;
		},
		trigger : function(name) {
			this.callbacks[name].call(this, name);
		},
		callbacks : {}
	}
	var Model = Blakebone.Model = function() {
		// this.atts = {} this doesnt work right now.  need to add these props to F
	}
	var modelExtension = {
		set : function(key, value) {
			this[key] = value
			var toTrigger = "change:" + key
			this.trigger.call(this, toTrigger) 
		}
	}
	_.extend(Model.prototype, modelExtension)
	var extend = function(atts) {
		if(typeof(atts) !== "undefined") {
			if(typeof(atts["defaults"]) !== "undefined") {
				var props = atts["defaults"];
				delete atts["defaults"];
				var methods = atts;
				if(typeof(methods["init"]) === "function") {
					var init = methods["init"]
				}
				else {
					var init = function() {}
				}
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
			init.call(this);
		};
		_.extend(F.prototype, Events, this.prototype)
		if(typeof(methods) === "object") {
			_.each(atts, function(value, key) {
				if(typeof(value) === "function") {
					F.prototype[key] = value;
				}
			})
		}
		return F;
	}
	var View = Blakebone.View = {

	}
	Model.extend = View.extend = extend;

}())
