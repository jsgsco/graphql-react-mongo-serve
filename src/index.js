import { server } from './server'
import './database'

server.start({ port: 4000 }, ({port}) => {
    console.log('Sevidor ON' + port)
})