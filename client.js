console.log('JS');
console.log("Hello! Weove got objects!");

// Object literal
const baseballHat = {
    type: 'cap',
    color: 'black',
    size: 'XL'
}

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L'
}

console.log('baseballHat', baseballHat);



// Const w/objects
// Can I do this?????

sunHat.size = 'XL';
console.log('After setting size:', sunHat);

//Can't set to another object
/*
sunHat = {
    type: 'sun'
    color: 'white'
    size: 'S'
}

console.log('Set to a new hat?', sungHat);
*/

let penguins = [
    {
      name: 'Emperor',
      colors: ['Black', 'White', 'Yellow'],
      size: 1.0,
      isCute: true
    },
    {
      name: 'Little',
      colors: ['Slate-blue', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Rockhopper',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.75,
      isCute: true
    },
    {
      name: 'African',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Gentoo',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Sea Gull',
      colors: ['Gray'],
      size: 0.25,
      isCute: false
    },
    {
      name: 'Chinstrap',
      colors: ['Black', 'White'],
      size: 0.25,
      isCute: true
    },
    {
      name: 'Macaroni',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.5,
      isCute: true
    },
  ];
  
  function findIsCute (inputArray) {
      let outputArray = [];
    for( let thing of inputArray ){
        console.log('a thing', thing);
        if (   thing.isCute === true ) {
            outputArray.push(thing);
        }

    }
      return outputArray;
  }

  console.log('We have the cute ones!', findIsCute(penguins));

  // Would also work
  //for ( let i=0; i<inputArray.length; i++ ) {

  //Object constructor functions

  function Hat(myType, myColor, mySize) {
      this.type = myType;
      this.color = myColor;
      this.size = mySize;
  }

  const fancyHat = new Hat('fancy', 'gold', 'M');
  console.log (fancyHat);
  