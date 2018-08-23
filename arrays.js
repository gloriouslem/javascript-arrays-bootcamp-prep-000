var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// pass

var list = [10, 20]

function addElementToBeginningOfArray (array, element) {
  const newArray = [element, ...array];
  return newArray;
}
console.log(addElementToBeginningOfArray (list, 'not changing original'));
console.log(list);


// 

var list = [30, 40]

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element);
  const newArray = array.unshift(element);
  return newArray;
}

destructivelyAddElementToBeginningOfArray (list, 'insert to original');
console.log(list);


// 

var list = [50, 60]

function addElementToEndOfArray (array, element){
  var newArray = [...array, element];
  return newArray;
}
console.log(addElementToEndOfArray (list, 'add to end of original'));
console.log(list);

//


var list = [70, 80]

function destructivelyAddElementToEndOfArray (array, element){
  var newArray = array.push(element);
  return newArray;
}
console.log(destructivelyAddElementToEndOfArray (list, 'update end of original'));
console.log(list);

//

<<<<<<< HEAD

function accessElementInArray (array, index) {
  return;
}

//


function destructivelyRemoveElementFromBeginningOfArray (array) {
  return;
}

//


function removeElementFromBeginningOfArray (array) {
  return;
}


//

function destructivelyRemoveElementFromEndOfArray (array) {
  return;
}

//

function removeElementFromEndOfArray (array) {
  return;
}


=======
>>>>>>> 18bb991076fa9d93b5776344b9f23d52576bb361
