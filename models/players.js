const mongoose = require('mongoose')

const url = process.env.YEA

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const playerSchema = mongoose.Schema({
    name: String,
    club: String,
    important: Boolean
})

playerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player