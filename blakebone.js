(function() {
	var Blakebone = {};
	// expose Blakebone object to the global object
	window.Blakebone = Blakebone;

	// define events object that we will later add to models and views
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

	// define an object that contains functions we're going to copy onto the model's prototype
	var modelExtension = {
		set : function(key, value) {
			this[key] = value
			var toTrigger = "change:" + key
			this.trigger.call(this, toTrigger) 
		}
	}

	// copy the functions on the model extension object onto the models prototype
	_.extend(Modenl.prototype, modelExtension)
	
	var extend = function(initObject) {
		// were going to take an init object
		// any properties defined on its default property will be copied
		// to the new object when we call the constructor function
		// were going to create a new constructor function and copy
		// the properties of the events object, and the models prototype
		// to the prototype of the constructor function.
		// were also going to invoke the init function when we call the constructor
		initObject = initObject || {};

		var init = function() {};
		if (typeof initObject.init === "function") {
			init = initObject.init;
			delete initObject.init;
		}

		var props = {};
		if (typeof initObject.defaults === "object") {
				props = initObject.defaults;
				delete initObject.defaults;
		}

		var methods = initObject;

		// create constructor function
		var F = function() {
			// this function will be called as a constructor
			// copy properties of the passed in default object on the new object we're creating
			// context of "this" will be the new object we're creating
			_.each(props, function(value, key) {
				this[key] = value;
			}, this)
			// call the init function we closed over when we defined the extend function
			init.call(this);
		};

		// add the events and models prototype to the prototype of the constructor function
		// the context of "this" is the model
		_.extend(F.prototype, Events, this.prototype)

		// copy methods to the prototype of F
		_.each(methods, function(value, key) {
			if (typeof value === "function") {
				F.prototype[key] = value;
			}
		});

		return F;
	}

	var View = Blakebone.View = {

	}
	Model.extend = View.extend = extend;

}())
