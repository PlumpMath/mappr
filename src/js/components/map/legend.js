/** @jsx React.DOM */
var React = require('react');
var RaceStore = require('../../stores/race-store');
var StoreWatch = require('../../mixins/store-watch');

function getRaces() {
  return {
    races: RaceStore.getRaces()
  }
}

var Legend = React.createClass({
  mixins: [StoreWatch(getRaces, RaceStore)],

  render: function() {
    var races = this.state.races.map(function(race) {
      var style = {
        background: race.color
      };

      return (
        <div className="race" style={style}>
          {race.title}
        </div>
      );
    });

    return (
      <div className="legend-container">
        <h2>Legend</h2>
        {races}
      </div>
    )
  }
});

module.exports = Legend;
