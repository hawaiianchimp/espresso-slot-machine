var app = app || {}

app.Machine = Backbone.Model.extend({
	defaults: {
		rollers: {}
	},
	initialize: function(){
		//this.collection = new app.Rollers;
		this.rollers = {};
		//makers
		var coffeeMaker = new app.Section({
			value:"coffee",
			image: app.img.coffee.maker,
			position: 1
		});

		var teaMaker = new app.Section({
			value:"tea",
			image: app.img.tea.maker,
			position: 2
		});

		var espressoMaker = new app.Section({
			value:"espresso",
			image: app.img.espresso.maker,
			position: 3
		})

		//filters
		var coffeeFilter = new app.Section({
			value:"coffee",
			image: app.img.coffee.filter,
			position: 1
		});

		var teaFilter = new app.Section({
			value:"tea",
			image: app.img.tea.filter,
			position: 2
		});

		var espressoFilter = new app.Section({
			value:"espresso",
			image: app.img.espresso.filter,
			position: 3
		})

		//beans
		var coffeeBeans = new app.Section({
			value:"coffee",
			image: app.img.coffee.beans,
			position: 1
		});

		var teaBeans= new app.Section({
			value:"tea",
			image: app.img.tea.beans,
			position: 2
		});

		var espressoBeans = new app.Section({
			value:"espresso",
			image: app.img.espresso.beans,
			position: 3
		});


		var makerSections = new app.Roller([
				coffeeMaker, teaMaker, espressoMaker
			]);
		var filterSections = new app.Roller([
				coffeeFilter, teaFilter, espressoFilter
			]);
		var beansSections = new app.Roller([
				coffeeBeans, teaBeans, espressoBeans
		 	]);
		makerSections.position = 1;
		filterSections.position = 2;
		beansSections.position = 3;

		$("#spinner-view").html(' ');
		this.rollers["maker"] = new app.RollerView({id:"roller1", collection: makerSections});
		$("#spinner-view").append(this.rollers["maker"].render().el);

		this.rollers["filter"] = new app.RollerView({id:"roller2", collection: filterSections});
		$("#spinner-view").append(this.rollers["filter"].render().el);

		this.rollers["beans"] = new app.RollerView({id:"roller3", collection: beansSections});
		$("#spinner-view").append(this.rollers["beans"].render().el);
	},
	pullLever: function(){
		_.each(this.rollers, function(roller){
			roller.startRoll();
		})
	},
	stopAll: function(timeout){
		_.each(this.rollers, function(roller, i){
			console.log(i, roller);
			roller.stopRoll(timeout * roller.collection.position);
			console.log(roller.collection.rollValue);
		})
	}
});