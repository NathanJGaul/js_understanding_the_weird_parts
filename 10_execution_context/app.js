b(); // this will run fine
console.log(a); //this will return 'undefined'

var a = 'Hello World!'; // without this 'a' definition the above console.log(a) will produce an error and not 'undefined'
// this is called hoisting

function b () {
    console.log('Called b!');
}

b(); // this will run fine
console.log(a); // this will run fine test