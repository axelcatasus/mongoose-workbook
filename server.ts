import express, { Request, Response, json } from 'express'
import animalRouter from './routes/animal'
import { connect } from 'mongoose'

connect('mongodb://localhost:27017/zoo')

const app = express()
app.use(json());
const port = 3000

app.get('/', (req: Request, res: Response) => { 
    res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}!`)
})

app.use('/animal', animalRouter)