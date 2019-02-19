# Burger App

The Buger App is a restaurant app, which allows users input the names of burger of their choice. Once submited the burger's name is displayed on the left side of the page. Each burger can be devoured by clicking on the `devour it!` button. Once `devoured` the burger moves to the right side of the page. The app stores every burger in a database, whether devoured or not.  The burger App is deployed on [Heroku](https://radiant-ocean-85125.herokuapp.com).


#Functionality
The`Burger App` leverages the following thecnologies: MySQL, Node, Express, Handlebars and a homemade Object-relational mapping (ORM). The structure of the app follows the Model View Controller (MVC) design pattern to ensure that overlaps are minimized and that separtion of concern is taken into account.

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── bckgd.png
|           |__ burgerImg.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars




