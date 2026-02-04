use("Contatos")


db.contatos.deleteOne({
    email: "carlos@empresa.com"
})

db.contatos.deleteMany({
    cidade: /^Curitiba$/i
})