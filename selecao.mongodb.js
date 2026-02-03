use("Bosch")

db.people.find({ name: "Helo"})

db.people.find({ name: /^R.*a$/})

db.people.find({ $and: [{ name: "Thaís"}, { lastName : "Schitz"}]})

db.people.find({ salary: {$gte: 2200}})

db.people.find({salary: { $gte: 2200}}, {name: 1, salary: 1})

db.people.find()
