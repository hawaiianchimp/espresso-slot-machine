"use strict";
var app = app || {};

app.WinnerView = Backbone.View.extend({
	tagName:"div",
	className:"winner",
	template: _.template($("#winner-template").html()),
	render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			$(".door").removeClass("open");
			return this;
	},
	initialize: function(){
		this.model.on("change:value", this.revealHandler, this);
	},
	revealHandler: function(){
		$(".door").removeClass("open");
		var value = this.model.get("value");
		if(!value)
		{
			this.model.set("image", app.img.default);
		}
		else
		{
			this.model.set("image", app.img[value].cup);
			var image = this.model.get("image");
			$("#winner-value span").html(value);
			$("#winner-image").html(image);
			$(".door").addClass("open");
		}
	}
})