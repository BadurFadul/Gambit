# Gambit

I have structured the project as following

Controllers:contains all the routes (logins, register, users)

Models: models is used for defaining the Mongoose schema for users

Utils: contains config where I define the environment variables. logger for printing error and info messages.Middleware is where I have all my middlewares

App.js: is used for establishing connection to database, defining the routes

index.js: is used for starting the application

data: Is where i get the data