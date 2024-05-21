// const passwordGenerator = () => {}
// console.log(typeof passwordGenerator)
// console.log(passwordGenerator instanceof Object)
const obj = {
  a: 1,
  b: 2,
  c: 3,
}
// rest op. on LHS
// const { a, ...bc } = obj

// console.log(a)
// console.log(bc)

// console.log(Date.now())
// console.log(...obj) // WON'T WORK = TypeError: Found non-callable @@iterator
// console.log({ ...obj, d:4 })

// let arr = [2, 3, 4, 5]
// arr.map((arrEle) =>
//   arrEle == 3 ? console.log('Three') : console.log('Not Three')
// )

// function testMap() {
//   let arr2 = [2, 3, 4, 5]
//   // retMap is array of "Three", "Not Three" returned by callback inside .map()
//   let retMap = arr2.map((arrEle) => {
//     //   return arr2.map((arrEle) => {
//     if (arrEle == 3) {
//       return 'Three'
//     } else {
//       return 'Not Three'
//     }
//   })
//   return retMap
// }

// console.log(testMap())
// let arr2 = [2, 3, 4, 5]

// function testFilter() {
//   console.log('inside filter')
//   let retFilter = arr2.filter((arrEle) => arrEle === 5)
//   return retFilter
// }

// console.log(testFilter())
// console.log(arr2);

// console.log(arr2.splice(1, 1))
// console.log(arr2.length)

let arr2 = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
]
/*
const deleteTodo = (id) => {
  let filterEleArr = arr2.filter((element) => element.id === id)
  let delIndex = arr2.indexOf(filterEleArr[0])
  console.log(delIndex)
  console.log(arr2.splice(delIndex, 1))
}
deleteTodo(4)
console.log(arr2)
*/
// TOO shorthand a version also works, as bewlo
// const deleteTodo = (id) => {
//   console.log(
//     arr2.splice(arr2.indexOf(arr2.filter((element) => element.id === id)[0]), 1)
//   )
// }

// deleteTodo(4)
// console.log(arr2)

// arrTodoEle.id === id ? {...arrTodoEle, completed: !arrTodoEle.completed} : arrTodoEle

let todoArr = [
  {
    id: 1,
    completed: false,
  },
  {
    id: 2,
    completed: false,
  },
  {
    id: 3,
    completed: false,
  },
]

function test(id) {
  todoArr.map((todo) => {
    todo.id === id
      ? console.log({ ...todo, completed: !todo.completed })
      : console.log(todo)
    return console.log({ ...todo, completed: !todo.completed })
  })
}
test(1)
