// (function($){

var img = {
	coffee: {
		maker: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier2" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 180.5,91.5 L 180.5,151.5 171.5,151.5 171.5,91.5 149.17,91.5 C 150.53,92.54 151.83,93.68 153.08,94.92 168.31,110.15 168.31,134.85 153.08,150.08 137.85,165.31 113.15,165.31 97.92,150.08 82.69,134.85 82.69,110.15 97.92,94.92 99.25,93.6 100.64,92.39 102.1,91.3 L 86.5,83.5 180.5,83.5 180.5,91.5 Z M 180.5,91.5" /><path id="bezier" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 171.5,45.5 L 144.5,71.5 101.5,71.5 75.5,45.5 61.5,45.5 61.5,161.5 168.5,161.5 168.5,176.5 23.5,176.5 23.5,161.5 23.5,45.5 23.5,20.5 171.5,20.5 171.5,45.5 Z M 171.5,45.5" />',
		filter:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 50,140 L 10,50 C 10,50 20,45 30,50 40,55 40,55 50,50 60,45 60,45 75,50 90,55 90,55 100,50 110,45 110,45 125,50 140,55 140,55 150,50 160,45 160,45 170,50 180,55 190,50 190,50 L 150,140 50,140 Z M 50,140" /></svg>',
		beans:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier2" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 144.51,19.77 C 155.84,23.29 161.5,27.89 161.5,32.5 L 161.5,172.5 C 161.5,177.11 155.84,181.71 144.51,185.23 121.86,192.26 85.14,192.26 62.49,185.23 51.16,181.71 45.5,177.11 45.5,172.5 L 45.5,32.5 C 45.5,27.89 51.16,23.29 62.49,19.77 85.14,12.74 121.86,12.74 144.51,19.77 Z M 144.51,19.77" /></svg>',
		cup:''
	},
	tea: {
		maker:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 111.99,28.01 C 116.67,32.7 116.67,40.3 111.99,44.99 111.58,45.39 111.16,45.76 110.71,46.09 119.71,47.39 128.46,50.85 136.12,56.46 136.63,55.87 137.16,55.29 137.73,54.73 150.03,42.42 169.97,42.42 182.27,54.73 194.58,67.03 194.58,86.97 182.27,99.27 175.92,105.63 167.52,108.7 159.19,108.49 157.87,121.02 152.41,133.2 142.81,142.81 138.28,147.33 133.19,150.93 127.76,153.61 L 152.5,164.5 55.5,164.5 76.5,153.5 77.01,153.5 C 71.67,150.83 66.65,147.26 62.19,142.81 52.02,132.63 46.49,119.56 45.62,106.25 L 17.5,57.5 C 17.5,55.29 34.29,57.5 36.5,57.5 L 49.18,82.31 C 51.95,74.98 56.29,68.1 62.19,62.19 71.67,52.72 83.65,47.28 96,45.87 95.66,45.6 95.33,45.3 95.01,44.99 90.33,40.3 90.33,32.7 95.01,28.01 99.7,23.33 107.3,23.33 111.99,28.01 Z M 145.5,61.65 C 144.96,62.21 144.45,62.8 143.98,63.4 153.09,73.06 158.2,85.13 159.28,97.49 164.76,97.68 170.31,95.64 174.5,91.35 182.5,83.15 182.5,69.85 174.5,61.65 166.49,53.45 153.51,53.45 145.5,61.65 Z M 145.5,61.65" /></svg>',
		filter:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier2" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(255, 255, 255)" d="M 69.09,100.09 C 68.3,100.87 68.3,102.13 69.09,102.91 69.87,103.7 71.13,103.7 71.91,102.91 72.7,102.13 72.7,100.87 71.91,100.09 71.13,99.3 69.87,99.3 69.09,100.09 Z M 50.09,100.09 C 49.3,100.87 49.3,102.13 50.09,102.91 50.87,103.7 52.13,103.7 52.91,102.91 53.7,102.13 53.7,100.87 52.91,100.09 52.13,99.3 50.87,99.3 50.09,100.09 Z M 30.09,100.09 C 29.3,100.87 29.3,102.13 30.09,102.91 30.87,103.7 32.13,103.7 32.91,102.91 33.7,102.13 33.7,100.87 32.91,100.09 32.13,99.3 30.87,99.3 30.09,100.09 Z M 78.09,110.09 C 77.3,110.87 77.3,112.13 78.09,112.91 78.87,113.7 80.13,113.7 80.91,112.91 81.7,112.13 81.7,110.87 80.91,110.09 80.13,109.3 78.87,109.3 78.09,110.09 Z M 60.09,110.09 C 59.3,110.87 59.3,112.13 60.09,112.91 60.87,113.7 62.13,113.7 62.91,112.91 63.7,112.13 63.7,110.87 62.91,110.09 62.13,109.3 60.87,109.3 60.09,110.09 Z M 40.75,109.65 C 40.51,109.74 40.28,109.89 40.09,110.09 39.3,110.87 39.3,112.13 40.09,112.91 40.87,113.7 42.13,113.7 42.91,112.91 43.7,112.13 43.7,110.87 42.91,110.09 42.33,109.5 41.47,109.35 40.75,109.65 Z M 22.94,109.58 C 22.63,109.67 22.33,109.84 22.09,110.09 21.3,110.87 21.3,112.13 22.09,112.91 22.87,113.7 24.13,113.7 24.91,112.91 25.7,112.13 25.7,110.87 24.91,110.09 24.38,109.55 23.62,109.38 22.94,109.58 Z M 69.09,120.09 C 69,120.17 68.93,120.26 68.86,120.36 68.31,121.14 68.39,122.22 69.09,122.91 69.87,123.7 71.13,123.7 71.91,122.91 72.7,122.13 72.7,120.87 71.91,120.09 71.13,119.3 69.87,119.3 69.09,120.09 Z M 50.09,120.09 C 49.3,120.87 49.3,122.13 50.09,122.91 50.87,123.7 52.13,123.7 52.91,122.91 53.7,122.13 53.7,120.87 52.91,120.09 52.13,119.3 50.87,119.3 50.09,120.09 Z M 30.09,120.09 C 29.3,120.87 29.3,122.13 30.09,122.91 30.87,123.7 32.13,123.7 32.91,122.91 33.7,122.13 33.7,120.87 32.91,120.09 32.13,119.3 30.87,119.3 30.09,120.09 Z M 89.54,88.5 L 173.5,88.5 C 175.71,88.5 177.5,90.29 177.5,92.5 L 177.5,100.5 C 177.5,102.71 175.71,104.5 173.5,104.5 L 89.54,104.5 C 88.06,110.58 84.86,116.36 79.95,121.12 L 79.81,121.25 C 65.56,134.92 42.44,134.92 28.19,121.25 18.93,112.37 15.68,99.89 18.46,88.5 L 89.54,88.5 Z M 89.54,88.5" /></svg>',
		beans:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 135.36,150 C 126.23,164.22 114.45,174.34 102.5,174.94 L 102.5,189.5 97.5,189.5 97.5,174.94 C 85.55,174.34 73.77,164.22 64.64,150 51.81,130 95.5,13 95.5,13 95.5,13 148.19,130 135.36,150 Z M 135.36,150" /></svg>',
		cup:''
	},
	espresso:{
		maker:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 177.5,54.5 L 177.5,186.5 42.5,186.5 42.5,165.5 121.5,165.5 121.5,54.5 95.5,54.5 95.5,76.5 61.5,76.5 61.5,71.5 11.5,71.5 C 9.29,71.5 7.5,69.71 7.5,67.5 L 7.5,62.5 C 7.5,60.29 9.29,58.5 11.5,58.5 L 61.5,58.5 61.5,54.5 42.5,54.5 42.5,17.5 177.5,17.5 177.5,54.5 Z M 177.5,54.5" /></svg>',
		filter:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier2" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 126.42,32.19 C 140.11,46.7 141.04,69.62 129.23,85.29 L 108.71,133.68 108.71,133.68 C 117.77,143.28 142.52,155.96 141.34,168.5 L 59.66,168.5 C 58.53,156.47 82.63,143.15 90.92,133.68 L 70.4,85.29 C 58.59,69.62 59.52,46.7 73.21,32.19 87.9,16.6 111.73,16.6 126.42,32.19 Z M 126.42,32.19" /></svg>',
		beans:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"  xml:space="preserve"><path id="bezier" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 86.5,80.7 C 94.5,92.97 94.5,112.87 86.5,125.14 83,130.5 78.55,133.52 73.98,134.2 L 73.98,83.19 C 73.98,82.12 73.19,81.24 72.22,81.24 L 71.78,81.24 C 70.81,81.24 70.02,82.12 70.02,83.19 L 70.02,134.2 C 65.45,133.52 61,130.5 57.5,125.14 49.5,112.87 49.5,92.97 57.5,80.7 65.51,68.43 78.49,68.43 86.5,80.7 Z M 86.5,80.7" /><path id="bezier2" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 127.5,124.7 C 135.5,136.97 135.5,156.87 127.5,169.14 124,174.5 119.55,177.52 114.98,178.2 L 114.98,127.19 C 114.98,126.12 114.19,125.24 113.22,125.24 L 112.78,125.24 C 111.81,125.24 111.02,126.12 111.02,127.19 L 111.02,178.2 C 106.45,177.52 102,174.5 98.5,169.14 90.5,156.87 90.5,136.97 98.5,124.7 106.51,112.43 119.49,112.43 127.5,124.7 Z M 127.5,124.7" /><path id="bezier3" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" fill="rgb(0, 0, 0)" d="M 127.5,33.7 C 135.5,45.97 135.5,65.87 127.5,78.14 124,83.5 119.55,86.52 114.98,87.2 L 114.98,36.19 C 114.98,35.12 114.19,34.24 113.22,34.24 L 112.78,34.24 C 111.81,34.24 111.02,35.12 111.02,36.19 L 111.02,87.2 C 106.45,86.52 102,83.5 98.5,78.14 90.5,65.87 90.5,45.97 98.5,33.7 106.51,21.43 119.49,21.43 127.5,33.7 Z M 127.5,33.7" /></svg>',
		cup:''
	},
	default:''
}

var RollerMaker = [
		{
			value:"coffee",
			image: img["coffee"]["maker"],
			position: 1
		},
		{
			value:"tea",
			image: img["tea"]["maker"],
			position: 2
		},
		{
			value:"espresso",
			image: img["espresso"]["maker"],
			position: 3
		}
];

var RollerFilter = [
		{
			value:"coffee",
			image: img["coffee"]["filter"],
			position: 1
		},
		{
			value:"tea",
			image: img["tea"]["filter"],
			position: 2
		},
		{
			value:"espresso",
			image: img["espresso"]["filter"],
			position: 3
		}
];

var RollerBeans = [
		{
			value:"coffee",
			image: img["coffee"]["beans"],
			position: 1
		},
		{
			value:"tea",
			image: img["tea"]["beans"],
			position: 2
		},
		{
			value:"espresso",
			image: img["espresso"]["beans"],
			position: 3
		}
];


var Section = Backbone.Model.extend({
	defaults:{
		value: 'default',
		image: img['default'],
		position: 0,
		roller: 'default'
	}
});

var SectionView = Backbone.View.extend({
	tagName:"div",
	className:"roller-section",
	template:"<%= image %>",

	render:function(){
		var tmpl = _.template(this.template);

		this.$el.html(tmpl(this.model.toJSON()));
		return this;
	}
});

var Sections = Backbone.Collection.extend({
	model: Section
})

var SectionsView = Backbone.View.extend({
	tagName:"div"
	className:"roller"
	initialize:function(){
		this.collection = new Section()
	}
	render:
})

var Roller = Backbone.Model.extend({
	model: Section,
});

var Rollers = Backbone.Collection.extend({
	model: Roller
})

var RollerView = Backbone.View.extend({
	el:$("#roller1"),
	initialize:function(){
		this.collection = new Roller(RollerMaker);
		this.render();
	},
	tagName:"div",
	className:"roller",
	render:function(){
		this.$el.html(' ');
		var _this = this;
		_.each(this.collection.models, function(item){
			_this.renderSection(item);
		}, this);
		//render the first item at the end of the list, to make the animation look continuous
		this.renderSection(this.collection.models[0]);
		//console.log("rendering");
	},
	renderSection:function(item){
		var sectionView = new SectionView({
			model: item
		});
		this.$el.append(sectionView.render().el);
	}
});

var roller1 = new RollerView();
var roller2 = new Section(RollerBeans);
var roller3 = new Section(RollerFilter);



// })(jQuery);
var rolling = false;

$("#lever").on("click", function(){
	if(rolling == false)
	{
		$("#roller1").addClass("roll1");
		$("#roller2").addClass("roll2");
		$("#roller3").addClass("roll3");
		rolling = true;
		setTimeout(function(){
				$("#roller1").removeClass("roll1");
				$("#roller2").removeClass("roll2");
				$("#roller3").removeClass("roll3");
				rolling = false;
		}, 5000);
	}
		
	$("#ball").addClass("ball-drop");
	$("#shaft").addClass("shaft-shrink");

	setTimeout(function(){
			$("#ball").removeClass("ball-drop");
			$("#shaft").removeClass("shaft-shrink");		
	}, 1000);


});