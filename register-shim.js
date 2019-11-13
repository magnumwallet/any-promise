"use strict";
module.exports = require('./loader')(global, loadImplementation)

/**
 * Browser specific loadImplementation.  Always uses `global.Promise`
 *
 * To register a custom implementation, must register with `Promise` option.
 */
function loadImplementation(){
  if(typeof global.Promise === 'undefined'){
    throw new Error("any-promise browser requires a polyfill or explicit registration"+
      " e.g: require('any-promise/register/bluebird')")
  }
  return {
    Promise: global.Promise,
    implementation: 'global.Promise'
  }
}
