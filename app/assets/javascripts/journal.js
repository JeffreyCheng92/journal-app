window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var collection = new Journal.Collections.Posts();
    var $rootEl = $('.root');
    new Journal.Routers.PostsRouter({collection: collection, $rootEl: $rootEl});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize();
});
