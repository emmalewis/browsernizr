var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');
var contains = require('./../../lib/contains');

/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"],
  "notes": ["Same as rgba(), in fact, browsers re-map hsla() to rgba() internally, except IE9 who retains it as hsla"]
}
!*/

  Modernizr.addTest('hsla', function() {
    var elem = createElement('div');
    var style = elem.style;
    style.cssText = 'background-color:hsla(120,40%,100%,.5)';
    return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
  });

