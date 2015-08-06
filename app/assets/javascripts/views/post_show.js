Journal.Views.PostShow = Backbone.View.extend({
  template: JST['post_show'],

  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .back-button": "backToIndex",
    "click .delete-post": "deletePost",
    "dblclick h3": "handleTitle",
    "dblclick p": "handleBody"
  },

  render: function(){
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  backToIndex: function(event) {
    event.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },

  deletePost: function(event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  handleTitle: function(event){
    var value = $(event.currentTarget).text();
    var $inputForm = this.handleHelper("title", value);
    $(event.currentTarget).html("").append($inputForm);

    this.$(".inputBox").on("blur", this.handleForm.bind(this, $inputForm, this.model));
  },

  handleBody: function(event){
    var value = $(event.currentTarget).text();
    var $inputForm = this.handleHelper("body", value);
    $(event.currentTarget).html("").append($inputForm);

    this.$(".inputBox").on("blur", this.handleForm.bind(this, $inputForm, this.model));
  },

  handleForm: function(form, model){
    var data = form.serializeJSON();
    model.save(data.post);
  },

  handleHelper: function(tag, value) {
    var $inputForm = $("<form>");

    if (tag === "title") {
      var $inputBox = $("<input class='inputBox'>")
                        .attr("name", "post[title]")
                        .attr("value", value);
    } else if (tag === "body") {
      var $inputBox = $("<textarea class='inputBox'>")
                        .attr("name", "post[body]")
                        .html(value)
                        .attr("row", 10)
                        .attr("col", 20);
    }
    $inputForm.append($inputBox);

    return $inputForm;
  }

});
