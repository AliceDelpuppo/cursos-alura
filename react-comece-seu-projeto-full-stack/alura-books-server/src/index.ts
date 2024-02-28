import express, { Request, Response } from 'express'
import routerBooks from './routes/livros'

const app = express()

const port = 9000

// app.get('/', (request: Request, response: Response) => {
// 	response.send('asd')
// })

app.use(express.json())

app.use('/livros', routerBooks)

app.listen(port, () => {
	console.log(`Porta ${port}`)
})
