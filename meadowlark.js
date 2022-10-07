const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', engine({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.use((req, res) => {
    res.status(404)
    res.render('404')
})
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(`Server stars on ${port}`))