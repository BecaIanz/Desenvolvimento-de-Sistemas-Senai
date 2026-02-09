import express, { response } from "express"
import routes from "./routes/routes.ts"

const port = 8080
const app = express()

routes(app)

app.get('/', (req, res) => {
    res.status(200).send({response : "Deu tudo certo meu chapa"})
})

app.listen(port, () => {
    console.log(`Serviodor rodando na porta ${port}`)
})