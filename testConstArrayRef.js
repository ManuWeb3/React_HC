// let arr = [1]
// arr.push(1)
// console.log(arr)

// arr[0] = 2
// console.log(arr)
// arr[0] = 20
// console.log(arr)

// arr = [2]
// console.log(typeof arr)
// console.log(arr)

// You can create a constant array:
// const cars = ['Saab', 'Volvo', 'BMW']

// You can change an element:
// cars[0] = 'Toyota'

// You can add an element:
// cars.push('Audi')

// console.log(cars)

// const cars;
// cars = ["Saab", "Volvo", "BMW"];

const cars = ['Saab', 'Volvo', 'BMW']
// console.log(cars[0])
// Here cars[0] is "Saab"
{
  const cars = ['Toyota', 'Volvo', 'BMW']
  // console.log(cars[0])
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
// console.log(cars[0])

// ============================
let obj = {
  name: 'manu',
}
{
  let obj = {
    name: 'manu',
  }
  console.log('inside', obj)
}
//won't work: error = Assignment to constant variable.
// obj = {
//   name: 'kapoor',
// }

obj.name = 'kapoor'
console.log('outside', obj)
