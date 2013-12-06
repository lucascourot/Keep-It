# Keep It

Admin tool for favorite products management

## Installation

 * Git clone or place the code source in the directory you want
 * Install npm
 * Run npm install
 * Run mongod to start mongodb
 * Run redis-server to start Redis
 * Run "node ." to start the application
 * Open http://localhost:1337/

## Rest API

 * Register to the application thanks to the Register form on the homepage
 * Login into the login form
 * Visit http://localhost:1337/api/v1 to see the API documentation

For example, to create a new connection you can either use the POST method or visit the URL below:
http://localhost:1337/api/v1/collections/create?name=mycollection1

The http response would look like:

    {
        name: "mycollection1",
        userId: "52a1537569d0620000000002",
        createdAt: "2013-12-06T04:34:38.280Z",
        updatedAt: "2013-12-06T04:34:38.280Z",
        id: "52a153de69d0620000000003"
    }

You will need to keep this collection id if you want to add items to this collection.

To do that, just visit this URL:
http://localhost:1337/api/v1/items/create?name=Laptop&description=description%20of%20the%20item&price=10&collectionId=52a153de69d0620000000003

The server responds with the created item:
    {
        name: "Laptop",
        description: "description of the item",
        collectionId: "52a153de69d0620000000003",
        price: 10,
        createdAt: "2013-12-06T04:37:43.568Z",
        updatedAt: "2013-12-06T04:37:43.568Z",
        id: "52a1549769d0620000000004"
    }

If you want to add other items you have to provide * different names *.

You can now come back  to the products page to see your collections and items :)
http://localhost:1337/products

Now, it's up to you to create a mobile application and bind it to the webservice.

# Configure the application

The application is based on the Sails (http://sailsjs.org/) Node.js web framework.
It used mongodb to store the data the Redis to store the sessions.

The configuration of the application is located in config/.
For example, if you want to manage i18n, you will find the translation files in config/locales and config/i18n.js.
If you want to change the database parameters, update the config/adapters.js file.

More about the configuration (http://sailsjs.org/#!documentation/configuration).
