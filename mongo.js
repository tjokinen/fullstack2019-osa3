const mongoose = require('mongoose')

const url =
    'mongodb+srv://fullstack:Fullst4ck1234@cluster0-xkp3g.mongodb.net/puhelinluettelo?retryWrites=true&w=majority'

mongoose.set('useUnifiedTopology', true)
mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  date: Date,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {

  const name = process.argv[3]
  const number = process.argv[4]

  const person = new Person({
    name: name,
    date: new Date(),
    number: number,
  })

  person.save().then(response => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}