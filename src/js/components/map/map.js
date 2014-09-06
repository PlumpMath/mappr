/** @jsx React.DOM */
var React = require('react');
var RaceStore = require('../../stores/race-store');
var StoreWatch = require('../../mixins/store-watch');
var Leaflet = require('react-leaflet');
var Map = Leaflet.Map;
var TileLayer = Leaflet.TileLayer;
var Marker = Leaflet.Marker;
var Popup = Leaflet.Popup;
var Legend = require('./legend');
var Awesome = require ('../../../../lib/Leaflet.awesome-markers');

function getRaces() {
  return {
    races: RaceStore.getRaces()
  };
}

var MapComponent = React.createClass({
  mixins: [StoreWatch(getRaces, RaceStore)],

  render: function() {
    var raceMarkers = this.state.races.map(function(race) {
      var icon = L.AwesomeMarkers.icon({
        icon: 'bicycle',
        markerColor: 'white',
        prefix: 'fa',
        iconColor: race.color
      });

      var flyer = (race.flyer !== '') ?
                  <a className="flyer" href={race.flyer}>Flyer</a> :
                  'NO FLYER';
      var reg = (race.registration !== '') ?
                <a className="registration" href={race.registration}>Registration</a> :
                'NO REGISTRATION';

      return (
        <Marker className="race-marker" position={race.position} icon={icon}>
          <Popup className="race-popup">
            <div>
              <h2>{race.title}</h2>
              <p className="description">
                {race.description}
              </p>
              {flyer}
              {reg}
            </div>
          </Popup>
        </Marker>
      );
    });

    return (
      <Map center={[37.767550, -122.430708]} zoom={9}>
        <Legend />
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="OSM">
        </TileLayer>
        {raceMarkers}
      </Map>
    );
  }
});

module.exports = MapComponent;
