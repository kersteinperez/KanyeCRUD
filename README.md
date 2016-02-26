# KanyeCRUD app for Bowie Students
Hey Bowies. Here's an example app to hopefully make the whole world of Express, routes and CRUD a little easier to navigate. Note: I am using MongoDB as my database. Disregard if that will be confusing to you. This is more about the trouble with routes I've noticed.

In this app, I have 2 successful routes -- I know you can do the missing operations. Based on this, you should be able to:
* Create an Express server
* Execute CREATE operations
* Execute READ operations
* Save and read from MongoDB
* Use template engine Embedded JavaSscript (EJS)

After installation and usage instructions (if I get the chance, I will deploy it for you), look at the code, everything is commented for you.

## Installation
1. Clone repo
2. Run `npm install`

## Usage
1. run `node server.js`
2. Navigate to (localhost:3000)

## CRUD, Express and MongoDB
+ Express is a framework used on top of Node.js. Node allows you to use JS as your server-side language. Express makes creating a server easier.
+ MongoDB is a database, where the info I'm putting into my app is stored.
+ CRUD is Create, Read, Update and Delete. Each operation can be associated with a route:
  * Create = Post = make something
  * Read = Get = retrieve something
  * Update = Put = change something
  * Delete = Delete = destroy something
