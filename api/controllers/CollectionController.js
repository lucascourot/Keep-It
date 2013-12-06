/**
 * CollectionController
 */

module.exports = {

    create: function (req, res) {
        try {
            if (!req.param('name') || !req.session.user) {
                return res.json({ error: "Invalid parameters." }, 400);
            }

            Collection.create({
                name: req.param('name'),
                userId: req.session.user
            }).done(function (err, collection) {
                if (err) throw err;
                res.json(collection);
            });

        } catch (e) {
            return res.json({ error: e.message }, 500);
        }
    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CollectionController)
   */
  _config: {}

  
};
