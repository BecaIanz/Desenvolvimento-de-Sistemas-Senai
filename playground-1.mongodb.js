// show databases

use('aula')
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

// db.people.insertOne(
//     {
//         name: "Rebeca",
//         lastName: "Ianz",
//         salary: 2172
//     }

// )

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