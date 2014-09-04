/**
 * Home
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    adapter: 'tumblr',

    info: function(cb){
        return this.find({}).exec(cb);
    }



};
