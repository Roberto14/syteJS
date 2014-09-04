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

        TumblrPost.find({}).exec(function(err, result){
            TumblrPost.findOne({tag:"featured"}).exec(function(err,featured){
                TumblrBlog.info(function(err,info){
                    //console.log(info[0]);
                    return res.view({
                        featured: featured,
                        blog_info: info[0],
                        title: this.title,
                        posts: result
                    });
                });
            });
        });
    },

    post: function(req, res){

        TumblrPost.find({id:req.params['id']}).exec(function(err, result){
            TumblrBlog.info(function(err,info){
                console.log(info[0]);
                return res.view({
                    blog_info: info[0],
                    title: this.title,
                    post: result[0]
                });
            });
        });
    },

    like: function(req, res) {
        console.log('like');
    },

    tagged: function(req,res){

        // todo: multiple tags?

        TumblrPost.find({tag:req.params["id"]}).exec(function(err, result){

                TumblrBlog.info(function(err,info){

                    return res.view("blog/tagged.ejs",{
                        tag: req.params['id'],
                        blog_info: info[0],
                        title: this.title,
                        posts: result
                    });
                });

        });
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}

  
};
