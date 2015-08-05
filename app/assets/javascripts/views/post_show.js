Journal.Views.PostShow = Backbone.View.extend({
  template: JST['post_show'],

  initialize: function(options) {

    this.listenTo(this.model, "sync", this.render.bind(this))
  },

  events: {
    "click .back-button": "backToIndex",
    "click .edit-button": "goToEdit"
  },

  render: function(){
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  backToIndex: function(event) {
    event.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },

  goToEdit: function(event) {
    event.preventDefault();
    Backbone.history.navigate("/posts/" + this.model.id + "/edit", {trigger: true});
  }

});
