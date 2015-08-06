Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST["post_index"],
  tagName: "div",
  className: "posts-list",

  initialize: function(options) {
    this.listenTo(this.collection, "sync remove reset", this.render);
    // this.collection.fetch({reset: true});
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.each(function(post){
      var view = new Journal.Views.PostIndexItem({model: post});
      this.$('ul').append(view.render().$el);
    }.bind(this));

    return this;
  }

});
