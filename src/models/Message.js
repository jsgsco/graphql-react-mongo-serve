import { Schema, model } from 'mongoose'

const messageSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
})

export default model('Message', messageSchema)