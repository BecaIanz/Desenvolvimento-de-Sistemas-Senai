use("Contatos")

db.contatos.updateOne(
    {_id: ObjectId('69832a5c6e5c74b9c931f3ed')},
    { $set: { email: "amanda.alterada@gmail.com", telefone: "988776654"}}
)

db.contatos.updateOne(
    {nome : "Amanda Souza"},
    { $set: { cidade: "São Paulo"}}
)