use("Contatos")

db.contatos.find({ nome: /^a/i})

db.contatos.find({ telefone: /^9/})

db.contatos.find({ email: /@gmail.com/})

db.contatos.find({ cidade: /são paulo/i})

db.contatos.find({ dataCadastro: { "$gte": ISODate("2023-01-01T00:00:00Z")}})