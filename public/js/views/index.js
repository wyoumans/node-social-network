define(['text!templates/index.html'], function(indexTemplate) {
  var indexView = Backbone.View.extend({
    el: $('#content'),

    render: function() {
      this.$el.html(indexTemplae);
    }
  });

  return new indexView;
});