const fortune = require('./fortune')

module.exports.home = (req, res) => res.render('home')
module.exports.about = (req, res) => res.render('about', {fortune: fortune.getFortune()})
module.exports.notFound = (req, res) => res.render('404')
module.exports.serverError = (err, req, res, next) => res.render('500')