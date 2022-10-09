const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const handlers = require('./lib/handlers')

const tours = [
    {id: 0, name: "Худ-Ривер", price: 99.99},
    {id: 1, name: "Орегон", price: 120.99},
]

app.engine('hbs', engine({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use(express.json())

app.get('/', handlers.home)
app.get('/headers', (req, res) => {
    res.type('text/plain')
    const headers = Object.entries(req.headers)
        .map(([key, value]) => `${key}: ${value}`)
    res.send(headers.join('\n'))
})
app.get('/api/tours', (req, res) => {
    res.json(tours)
})
app.get('/about', handlers.about)
app.get('/newsletter-signup', handlers.newsLetter)
app.post('/api/newsletter-signup', handlers.api.newsLetterSignup)
app.use(handlers.notFound)
app.use(handlers.serverError)

if(require.main === module) {
    app.listen(port, () => console.log(`Server stars on ${port}`))
} else {
    module.exports = app
}
