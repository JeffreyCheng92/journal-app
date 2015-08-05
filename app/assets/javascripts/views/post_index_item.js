Journal.Views.PostIndexItem = Backbone.View.extend({
  template: JST['post_index_item'],
  tagName: "li",
  className: "posts-list-item",

  events: {
    "click button.delete-button": "deletePostIndexItem"
  },

  initialize: function(options){

  },

  render: function(){
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  deletePostIndexItem: function(event){
    event.preventDefault();
    this.model.destroy();
    this.remove();
  }

})
