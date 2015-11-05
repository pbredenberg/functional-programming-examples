let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

let fullfykins =  dragon(('fluffykins'), ('tiny'), ('fire'));
console.log(fluffykins);

// currying is when a function instead of taking all arguments at one time, takes the first one
// and returns a new function that takes the second one and returns a new function which takes the
// third one, and so forth, until all arguments have been fullfilled
