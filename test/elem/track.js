var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');

/*!
{
  "name": "Track element and Timed Text Track API",
  "property": ["texttrackapi", "track"],
  "tags": ["elem"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 track Element Spec",
    "href": "http://www.w3.org/TR/html5/video.html#the-track-element"
  },{
    "name": "W3 track API Spec",
    "href": "http://www.w3.org/TR/html5/media-elements.html#text-track-api"
  }],
  "warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
}
!*/

  Modernizr.addTest('texttrackapi', typeof (createElement('video').addTextTrack) === 'function');

  // a more strict test for track including UI support: document.createElement('track').kind === 'subtitles'
  Modernizr.addTest('track', 'kind' in createElement('track'));

