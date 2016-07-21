function iterativeLog(array) {
  array.forEach(element => {
    console.log(`${array.indexOf(element)}: ${element}`)
  })
}

function iterate(callback) {
  nums = [1, 2, 3, 4, 5]
  nums.forEach(callback)
  return nums
}

function doToArray(array, callback) {
  array.forEach(callback)
}
