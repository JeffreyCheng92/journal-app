Journal.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "PostsIndex",
    "posts/new": "PostNew",
    "posts/:id/edit": "PostEdit",
    "posts/:id": "PostShow",
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.postsCollection = options.collection;
    this.hasIndex = false;
  },

  PostsIndex: function(){
    this.postsCollection.fetch();
    var view = new Journal.Views.PostsIndex({collection: this.postsCollection});
    this.$rootEl.find('.sidebar').html(view.$el);
    this.hasIndex = true;
  },

  PostShow: function(id){
    var post = this.postsCollection.getOrFetch(id);
    var view = new Journal.Views.PostShow({
      model: post
    });
    this.swap(view);
  },

  PostEdit: function(id){
    var post = this.postsCollection.getOrFetch(id);
    var view = new Journal.Views.PostForm({model: post, collection: this.postsCollection});
    this.swap(view);
  },

  PostNew: function(){
    var post = new Journal.Models.Post();
    var view = new Journal.Views.PostForm({model: post, collection: this.postsCollection});
    view.render();
    this.swap(view);
  },

  swap: function(view){
    if (!this.hasIndex) {
      this.PostsIndex();
    }

    if (this._view){
      this._view.remove();
    }
    this._view = view;
    this.$rootEl.find(".content").html(this._view.$el);
  }
})
