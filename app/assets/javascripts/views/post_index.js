Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST["post_index"],
  tagName: "ul",
  className: "posts-list",

  initialize: function(options) {
    // this.collection = new Journal.Collections.Posts();
    this.listenTo(this.collection, "sync remove reset", this.render.bind(this));
    this.collection.fetch({reset: true});
  },

  render: function() {
    var thisView = this;
    // debugger
    this.$el.empty();
    thisView.collection.each(function(post){
      var view = new Journal.Views.PostIndexItem({model: post});
      thisView.$el.append(view.render().$el);
    })

    return this;
  },



});
