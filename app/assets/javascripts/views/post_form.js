Journal.Views.PostForm = Backbone.View.extend({
  template: JST['post_form'],

  events: {
    "submit form": "handleSubmission"
  },

  initialize: function(){
    this.listenTo(this.model, 'sync', this.render.bind(this));
  },

  render: function() {
    var title = (this.model.isNew()) ? "New Post!" : "Edit a Post";
    var content = this.template({post: this.model, title: title});
    this.$el.html(content);
    return this;
  },

  handleSubmission: function(event){
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    this.model.save(formData, {
      success: function(model){
        this.collection.add(model);
        Backbone.history.navigate("/posts/" + model.id, {trigger: true} );
      }.bind(this)
    });

  }

});
