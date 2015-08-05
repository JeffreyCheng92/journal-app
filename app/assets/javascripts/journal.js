window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var indexView = new Journal.Views.PostsIndex();
    var content = indexView.render().$el;
    $('.root').html(content);
  }
};

$(document).ready(function(){
  Journal.initialize();
});
