console.log('Kanye Loves Kanye')

const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

var db
MongoClient.connect('mongodb://kpperez:kanye@ds015928.mongolab.com:15928/kanye-quotes', (err, database) => {
  if (err) return console.log(err)
 db = database
 app.listen(3000, () => {
   console.log('listening on 3000')
 })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))


//* GET REQUEST = READ OPERATION *//
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})


app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('No one man should have all that power')
    res.redirect('/')
  })
})
