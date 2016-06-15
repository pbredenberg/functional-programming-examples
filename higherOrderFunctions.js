/*
  Higher-order functions allow us to construct components of a program using
  syntactically shorter expressions. A higher-order function accepts functions as
  arguments, and returns a function as a result.
  
  JavaScript now provides us with some built-in methods that operate on this principle.
  We could write our own higher order functions, but let's use these as examples.
*/

// Example:
// Here is a basic JavaScript array.
var comics = [
  { title: 'Superman', publisher: 'DC' },
  { title: 'Batman',   publisher: 'DC' },
  { title: 'The Hulk', publisher: 'Marvel' },
  { title: 'Thor',     publisher: 'Marvel' },
  { title: 'Aquaman',  publisher: 'DC' }
]

/*
  If we want to get titles out of our array that are by a certain publisher, we
  might decide to write a for loop. But that is so much code! Also, it's
  harder to read! If we were to use a higher-order function, one might
  choose "filter()" as his or her weapon of choice.
*/

// Using filter() to return all comics from the publisher DC:
var comicsByDC = comics.filter(function(comic) {
  return comic.publisher === 'DC'
})

// Let's see the result:
console.log(comicsByDC)

/*
  Our result would look like this:

  [ { title: 'Superman', publisher: 'DC' },
  { title: 'Batman', publisher: 'DC' },
  { title: 'Aquaman', publisher: 'DC' } ]

  See? They are all comics published by DC!

  But wait, there's more! There are some other higher-order functions that are
  also useful.

  Map() is a function that allows us to pick out individual values from an
  array.
*/

// Let's return just the titles of our comics:
var comicTitles = comics.map(function(comic){
  return comic.title
})

// And the result:
console.log(comicTitles)

/*
  It looks like this:
  [ 'Superman', 'Batman', 'THe Hulk', 'Thor', 'Aquaman' ]

  WOOHOOOOOOOOO!

  Ok, next you might also want to check out Sort(). Can you guess what it does?
  It completely deletes your entire program. KIDDING. It sorts your array.
*/

// Using sort:
console.log(comicTitles.sort());

/*
  Sort is usually pretty nice, but watch out! It will sort according to Unicode
  point order, the explanation of which is out of the scope of this document.
  If you wish to discover what that is, and how to get the results you'd expect
  when sorting different types of arrays, off to Google with you!

  Hopefully by this point, you've got the idea. To reiterate, higher-order
  functions are functions that accept other functions that we can use frequently
  to simplify our program and increase the readability of it.
*/
