var RaceDispatcher = require('../dispatchers/race-dispatcher');
var RaceConstants = require('../constants/race-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;
var Please = require('../../../node_modules/pleasejs/dist/Please');

var CHANGE_EVENT = 'change';

var _races = [
  {
    position: [38.583748, -121.508441],
    title: 'West Sacramento Cyclocross Grand Prix',
    description: 'Tight course design with deep grass, pavement, dirt, and gravel with off-camber turns. Rain or shine or heat.',
    flyer: 'http://www.ncnca.org/sites/default/files/09/04/2014%20-%2011%3A40pm/West%20Sac%20Cross%20GP%209_6%202014%201639%20V2%20OKED.pdf',
    registration: 'https://timeyourrace.com/GCX/RegMain.asp',
    type: 'cyclocross',
    date: '09/06/14'
  },
  {
    position: [36.645520, -121.808387],
    title: 'CCCX CYCLOCROSS SERIES - Race #1',
    description: 'NO DESCRIPTION',
    flyer: 'http://www.cccxcycling.com/2014XCPAGE.html',
    registration: '',
    type: 'cyclocross',
    date: '09/07/14'
  },
  {
    position: [36.645520, -121.808387],
    title: 'CCCX CYCLOCROSS SERIES - Race #2',
    description: 'NO DESCRIPTION',
    flyer: 'http://www.cccxcycling.com/2014XCPAGE.html',
    registration: '',
    type: 'cyclocross',
    date: '09/13/14'
  },
  {
    position: [37.684530, -121.768811],
    title: 'Red Kite Cyclocross #1',
    description: 'NO DESCRIPTION',
    flyer: 'http://www.redkiteracing.com/',
    registration: '',
    type: 'cyclocross',
    date: '09/13/14'
  },
  {
    position: [37.684530, -121.768811],
    title: 'Red Kite Cyclocross #2',
    description: 'NO DESCRIPTION',
    flyer: 'http://www.redkiteracing.com/',
    registration: '',
    type: 'cyclocross',
    date: '09/20/14'
  },
  {
    position: [37.713765, -122.386277],
    title: 'BASP - Grand Prix Clark Natwick',
    description: 'CX at Candlestick Park',
    flyer: 'http://www.ncnca.org/sites/default/files/09/02/2014%20-%208%3A46am/Clark%20Natwick%20%20Cross%202014%202889%20OKED.pdf',
    registration: 'https://www.bikereg.com/bay-area-super-prestige-cyclocross-candlestick-park',
    type: 'cyclocross',
    date: '09/21/14'
  },
  {
    position: [39.533492, -119.851038],
    title: 'Sagebrush Cyclocross Series #1 - Peavine Creek Dam',
    description: 'NO DESCRIPTION',
    flyer: 'http://www.ncnca.org/sites/default/files/09/05/2014%20-%2010%3A58am/Sagebrush2014.pdf',
    registration: 'http://www.sagebrush.cx/rules-registration/',
    type: 'cyclocross',
    date: '09/20/14'
  },
  {
    position: [36.645520, -121.808387],
    title: 'CCCX CYCLOCROSS SERIES - Race #3',
    description: 'NO DESCRIPTION',
    flyer: 'http://www.cccxcycling.com/2014XCPAGE.html',
    registration: '',
    type: 'cyclocross',
    date: '09/20/14'
  },
  {
    title: 'San Joaquin River Cyclocross (FCCX #1)',
    position: [37.008976, -119.717185],
    description: 'Lost Lake recreation area. Day-of reg only.',
    flyer: 'http://www.ncnca.org/sites/default/files/09/05/2014%20-%2011%3A07am/San%20Joaquin%20River%20CX%202014%203212%20V2%20OKED.pdf',
    registration: '',
    type: 'cyclocross',
    date: '09/27/14',
  },
  {
    position: [37.684530, -121.768811],
    title: 'Red Kite Cyclocross #3',
    description: 'NO DESCRIPTION',
    flyer: 'http://www.redkiteracing.com/',
    registration: '',
    type: 'cyclocross',
    date: '09/27/14'
  },
  {
    position: [36.645520, -121.808387],
    title: 'CCCX CYCLOCROSS SERIES - Race #4',
    description: 'NO DESCRIPTION',
    flyer: 'http://www.cccxcycling.com/2014XCPAGE.html',
    registration: '',
    type: 'cyclocross',
    date: '09/28/14'
  },
];

// inject color and id into each race
for (var i = 0; i < _races.length; i++) {
  _races[i].color = Please.make_color();
  _races[i].id = i;
}

function _getRace(id) {
  for (var i = 0; i < _races.length; i++) {
    if (_races[i].id === id) {
      return _races[i];
    }
  }
}

var RaceStore = merge(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getRace: function(id) {
    return _getRace(id);
  },

  getRaces: function() {
    return _races;
  },

  dispatcherIndex: RaceDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
      default:
        // do something
        break;
    }

    RaceStore.emitChange();

    return true;
  })
});

module.exports = RaceStore;
