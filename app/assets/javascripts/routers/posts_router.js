Journal.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "PostsIndex",
    "posts/:id": "PostShow"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.postsCollection = options.collection;
    // debugger;
    // Add collection maybe?
  },

  PostsIndex: function(){
    // debugger
    // Add collection by passing into router initliaze?
    var view = new Journal.Views.PostsIndex({collection: this.postsCollection});
    this.swap(view);
  },

  PostShow: function(id){
    // debugger;
    var post = this.postsCollection.getOrFetch(id);
    var view = new Journal.Views.PostShow({ model: post});
    this.swap(view);
  },

  swap: function(view){
    if (this._view){
      this._view.remove();
    }
    this._view = view;
    this.$rootEl.html(this._view.$el);
  }
})
