/**
 * Global adapter config
 * 
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

  // If you leave the adapter config unspecified 
  // in a model definition, 'default' will be used.
  'default': 'disk',

  // Persistent adapter for DEVELOPMENT ONLY
  // (data is preserved when the server shuts down)
  disk: {
    module: 'sails-disk'
  },

    twitter: {
        module: 'sails-twitter',
        consumerKey: 'tOz1y57G6oz5u7fFsKzEY7wfx',
        consumerSecret: '34UHRKGGc5oB9jTAk3hoqqLbakCIBtqXZsJOycEUKUmZPP9kQE',
        accessToken: '23519885-jh9OVrcPuKiIU7mfgEIpCzl6gR1QYe1wvVnoZ6xSf',
        accessTokenSecret: '438qMR6qGWPXco2KK5A5bKSUDqZbrsFz6fbatk1q777WY'
    },

    tumblr: {
        module: 'sails-tumblr',
        consumerKey: 'EbVUBJDje9kEfwHG4nLJqxEec1kujoHlPaVv2uNTNOg1bltNUz',
        consumerSecret: 'MnvVojRYU1Jdirt4CVcLfbCl0hXuWusLxUvZmiNXPiyU1BJrWt',
        accessToken: 'pQ33j3986LoZpGkFu0qC1W1Ru05pKWzQsNhIZEf7BkH0gHHgiT',
        accessTokenSecret: 'nA6pIdDr9SeZkfGwjmg7nk4kghwGwd2Vb41oawag046PIO0Qk8',
        blogUrl: 'roberto14rj.tumblr.com'
    }
};