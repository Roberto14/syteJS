/**
 * HomeController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    index: function(req, res) {

        this.title = 'IndexPage - ' + sails.config.appName;

        /*Tumblr.test({},{},function(err, res){
         console.log(err,res);
         });*/



        TumblrPost.find({}).exec(function(err, result){
            console.log(result[result.length-6]);
            return res.view({
                title: this.title,
                data: [1,2],
                posts: result
            });
        });


    },

    like: function(req, res) {
        console.log('like');
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}

  
};
