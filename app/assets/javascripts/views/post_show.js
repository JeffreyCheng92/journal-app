Journal.Views.PostShow = Backbone.View.extend({
  template: JST['post_show'],

  initialize: function(options) {

    this.listenTo(this.model, "sync", this.render.bind(this))
  },

  events: {
    "click .back-button": "backToIndex",
  },

  render: function(){
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  backToIndex: function(event) {
    event.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  }
});
