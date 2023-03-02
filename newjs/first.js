console.log('hello world')


let  weather = 'Rain'

if(weather=='Rain'){
    console.log('Bring the umbrella')
}else{
    console.log('No need to bring the umbrella')
}

function hello(){
    console.log('swamy patel')
    console.log('manusha patel')
    console.log('shiva patel')
    console.log('pranitha patel')
    console.log('chotu patel')

}
hello()

// function with the parameters...
function greet(name){
    console.log(name)
}
greet('Hello welcome to the Tcs family one of the best family in the world')


//template literal

function Greeting(name){

    greet = `Hello ${name} Nice to meet you`
    console.log(greet)

}

Greeting('swamy')

// arrays

let x=['list','tuple','dict','set']

// inserting
x.push('frozen set') //inserting the element into the list..
console.log(x)
// indexing..
console.log(x[2]) //fetching the character using indexing..
console.log(x[4]) //fetching the char using the indexing..
//slicing it includes the first value and excludes the second value..
console.log(x.slice(0,4))
//length..
console.log(x.length) 
// #index 
console.log(x.indexOf('tuple'))


// Objects Data type..
// indexing is not works for the objects..
// #we can add edit the elements in the objects..
// objects are created with the key colon value.. key  is the constant but value is not the constant..

const dict={name:'swamy',age:22,color:'white'}
// fetching the objects..
console.log(dict.name)
console.log(dict.age)
// inserting the element into the obj.
dict.phone=9553439808
console.log(dict.phone)
console.log(dict)