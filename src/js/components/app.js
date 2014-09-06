/** @jsx React.DOM */
var React = require('react');
var Map = require('./map/map');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>hello</h1>
        <Map />
      </div>
    );
  }
});

module.exports = App;
