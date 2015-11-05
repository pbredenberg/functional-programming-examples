// in javascript functions are also closures. this means that the function has access
// to variables that are defined outside of the function body

var cannedVeggie = 'Spinach'

function tellMeWhatToEat() {
  console.log('You should eat some ' + cannedVeggie + '!')
}

tellMeWhatToEat();
