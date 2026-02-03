use("Bosch")

// db.people.updateOne(
//     {_id: ObjectId('6981f4b934c1b364eb73fa03')},
//     { $set: { name: "Cristian Mudado"}}
// )

db.people.updateMany(
    {salary : 2172},
    { $set: { cargo: "Aprendiz"}}
)