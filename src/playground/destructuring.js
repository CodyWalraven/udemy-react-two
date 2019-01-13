// const person = {
//   name: "Cody",
//   age: 25,
//   location: {
//     city: "Mckinney",
//     temp: "23F"
//   }
// }

// const { name = "Anon", age } = person
// console.log(`${name} is ${age}`)

// //Below is an example of renaming a variable with object destructuring, here we take the temp variable from the person object and destructure it into temperature, then setting a default of 5f
// const {city, temp: temperature = '5F'} = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }


const book = {
  title: 'Way of Kings',
  author: 'Brandon Sanderson',
  publisher: {
    name: 'Tor Books'
  }
}

const {name: publisherName = "Self-Published"} = book.publisher

console.log(publisherName)

