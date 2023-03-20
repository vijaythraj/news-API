const mon = require('mongoose')

const newsSchema = new mon.Schema({
    Headline: {
        type: String,
        required: true
    },
    Byline: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    Description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = mon.model('news',newsSchema)