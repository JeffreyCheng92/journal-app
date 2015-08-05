Journal.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: Journal.Models.Post,

  getOrFetch: function(id){
    // debugger;
    var post = this.get(id);
    if(!post){
      var post = new Journal.Models.Post({id: id});
      this.add(post);
    }
    post.fetch();
    return post;
  }
})
