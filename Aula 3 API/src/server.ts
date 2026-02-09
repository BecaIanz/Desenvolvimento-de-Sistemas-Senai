import express from "express"

const port = 8080
const app = express()

const pessoas = [
    {
        nome: "Rebecaa"
    },
    {
        nome: "Helo"
    },
    {
        nome: "Thaís"
    }
]

app.get('/',(req, res) => {
    res.send({response: "API funcionando"})
})

app.get('/pessoa', (req, res) => {
    res.status(200).send({pessoas: pessoas})
})


app.listen(port, () => {
    console.log(`Serviodor rodando na porta ${port}`)
})