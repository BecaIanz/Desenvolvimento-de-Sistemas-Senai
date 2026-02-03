// show databases

use('Bosch')

db.people.insertMany([
    {
        name: "Donathan",
        lastName: "Gonçalves",
        salary: 0
    },
    {
        name: "Patrick",
        lastName: "Henrique",
        salary: 2272
    },
    {
        name: "Cristian",
        lastName: "Cardoso",
        salary: 2272
    }]
)

const pessoinhas = [
    {
        name: "Cézar",
        lastName: "Stati",
        salary: 524443
    },
    {
        name: "Queila",
        lastName: "Lima",
        salary: 2344
    }
]

db.people.insertMany(pessoinhas)
let pessoa =  {
    nome : "Nicolas",
    lastName: "Marques",
    salary: 0.005
}
db.people.insertOne(pessoa)

db.people.insertOne(
    {
        name: "Rebeca",
        lastName: "Ianz",
        salary: 2172
    }

)

db.people.insertMany([
    {
        name: "Helo",
        lastName: "Fachinello",
        salary: 2172
    },
    {
        name: "Thaís",
        lastName: "Schitz",
        salary: 2172
    }]
)