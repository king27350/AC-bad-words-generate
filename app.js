// 1. define server 
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_words')
const app = express()
const port = 3000

// 2. setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 6. setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 3. setting routes
app.get('/', (req, res) => {
  res.render('index')
})

// 5. when we finished index page layout(##don't forget to set input's value##), set routes using post method 
app.post('/', (req, res) => {
  const option_job = req.body.options_job
  console.log(option_job)
  const talks = generateTrashTalk(option_job)
  res.render('index', { talks: talks, option_job })
})

// 4. starts the express server and listening for connection 
app.listen(port, () => {
  console.log(`Express app listening on port:${port}`)
})