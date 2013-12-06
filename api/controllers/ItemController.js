/**
 * ItemController
 */
module.exports = {

    create: function (req, res) {
        try {
            if (!req.param('name') || !req.param('price') || !req.param('collectionId') || !req.session.user) {
                return res.json({ error: "Invalid parameters." }, 400);
            }

            Item.create({
                name: req.param('name'),
                description: req.param('description'),
                collectionId: req.param('collectionId'),
                price: req.param('price')
            }).done(function (err, item) {
                if (err) throw err;
                res.json(item);
            });

        } catch (e) {
            return res.json({ error: e.message }, 500);
        }
    },

    list: function (req, res) {
        Item.findAll().done(function (err, items) {
            if (err) res.json({ error: 'DB error' }, 500);

            if (items) {
                res.json(items);
            } else {
                res.json({ error: 'No item found' }, 404);
            }
        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to ItemController)
     */
    _config: {}
};
