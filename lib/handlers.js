const fortune = require('./fortune')

module.exports.home = (req, res) => res.render('home')
module.exports.about = (req, res) => res.render('about', {fortune: fortune.getFortune()})
module.exports.notFound = (req, res) => res.render('404')
/* eslint-disable no-unused-vars */
module.exports.serverError = (err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */
module.exports.newsLetter = (req, res) => {
    res.render('newsletter', {csrf: 'TOKEN'})
}
module.exports.api = {
    newsLetterSignup(req, res) {
        console.log(`Name: ${req.body.name}`)
        console.log(`Email: ${req.body.email}`)
        res.send({result: 'success'})
    },
    vacationPhotoContest(req, res, fields, files) {
        console.log(fields)
        console.log(files)
        res.send({result: 'success'})
    }
}
module.exports.vacationPhoto = (req, res) => {
    const date = new Date()
    res.render('contest/vacation-photo-ajax', {year: date.getFullYear(), month: date.getMonth()})
}
module.exports.vacationPhotoThankYou = (req, res) => {
    res.render('contest/vacation-photo-thank-you')
}
module.exports.vacationPhotoContestProcess = (req, res, fields, files) => {
    console.log(req.params)
    console.log(fields)
    console.log(files)
    res.redirect(303, '/contest/vacation-photo-thank-you')
}