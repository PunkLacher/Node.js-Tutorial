
//import lodash as lodash
const lodash = require('lodash')

//const an array with nested arrays
const items = [1,[2,[3,[4]]]]

//use lodash method called flattenDeep to flatten nest array to flat array
const newItems = lodash.flattenDeep(items)
console.log(newItems)

