// Is this ish running? //
console.log('Kanye Loves Kanye')

// Need all this ish //
/* I used the const declaration to create a read-only reference to the value. My variable identifier can't be reassigned */
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

// This is all my db ish //
// I'm using mongolab to store my database//
var db
MongoClient.connect('mongodb://kpperez:kanye@ds015928.mongolab.com:15928/kanye-quotes', (err, database) => {
  if (err) return console.log(err)
 db = database
 // LISTEN UP DATABASE //
 /* app.listen is inside the connect method, so the server only starts when the db is connected*/
 app.listen(3000, () => {
   console.log('listening on 3000')
 })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

/* GET AND READ EXPLAINED:
The browser sends a GET request to the server to perform the READ operation.

If you see the error "cannot get" it's most likely ebcause you don't have anything to send back to the browser from the server.

We handle a GET request with a GET method, like below.
The first argument '/' is the path, anything that comes after your domain. The second argument is a callback function, and it tells the server what to do when it matches the path. It takes a request and response object. Like Kim and Kanye, they are better together.

I'm using => but it's the same as:
app.get('/', function(req, res){

})*/


// hey, app - go to the path and if they match...
app.get('/', (req, res) => {
  // get quotes from db using find method in collection method
  // toArray method takes in callback function lets us work with the quotes
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
// show or RENDER my index.ejs page
/* first parameter is the name of the file we are rendering and placed in my views folder. second parameter is locals, it's the object that passes into the view */
    res.render('index.ejs', {quotes: result})
  })
})

/* CREATE AND POST EXPLAINED:
The browser performs a CREATE operation only is a POST request is sent to the server. The POST request can be triggered by a form element, like in this example. Hint: Go over to my views/index.ejs file, read and come back here */

// POST request takes the same arguments as GET
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    // after saving, redirect back to '/'
    res.redirect('/')
  })
})

/* BODY-PARSER EXPLAINED:
body-parser is a middleware (or plugin) and we required it up top. We need it bc Express doesn't read the data from our form on it's own. body-parser extracts the data from our form and adds them to the body property in out request onject. */
