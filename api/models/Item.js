/**
 * Item
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name: {
            type: 'string',
            unique: true,
            required: true
        },

        collectionId: {
            type: 'string'
        },

        description: {
            type: 'string'
        },

        price: {
            type: 'float',
            required: true
        }
    }

};
