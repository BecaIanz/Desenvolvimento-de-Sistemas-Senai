use("Bosch")

db.people.find({ name: "Helo"})

db.people.find({ name: /^R.*a$/})

db.people.find({ $and: [{ name: "Thaís"}, { lastName : "Schitz"}]})