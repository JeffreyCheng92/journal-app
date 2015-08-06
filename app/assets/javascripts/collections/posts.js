Journal.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: Journal.Models.Post,

  getOrFetch: function(id){
    // debugger;
    var post = this.get(id);
    if(!post){
      post = new Journal.Models.Post({id: id});
      post.fetch({
        success: function () {
          this.add(post, { merge: true });
        }.bind(this)
      });
      // this.add(post);
    } else {
      post.fetch();
    }
    return post;
  }
})
