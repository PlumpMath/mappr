var Dispatcher = require('./dispatcher');
var merge = require('react/lib/merge');

var RaceDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'MAP_VIEW_ACTION',
      action: action
    });
  }
});

module.exports = RaceDispatcher;
