
// const fruits=['mango','apple','banana','orange','citrus']
// fruits.push('grapes')

// for (let i=0 ; i<fruits.length ; i++){
//     console.log(fruits[i])
// }

// for (const fruit of fruits){  // This is the second for loop
//     console.log(fruit)
// }

// for (const fruit of fruits){
//     console.log(fruit)
// }

a=[1,3,4,5,6,7,0,3]
let result=[]
for (const x of a){
    console.log(x *2)
    result.push(x *2)
}
console.log('The result array is the',result)



// using the function and for loop we are changing the array..
const double =(numbers)=>{
    let result=[]
    for (number of numbers){
        result.push(number *2)
    }
    return result
}
console.log(double([1,2,3,4,5,6]))


//another example..

const triple=(maths)=>{
    let result=[]
    for (number of maths){
        result.push(number*3)
    }
    return result
}
console.log(triple([2,4,6,8,10]))

// #conveting into the squares of the list

const squares=(numbers)=>{
    let list=[]
    for(number of numbers){
        list.push(number**2)
    }
    return list
}
console.log(squares([1,2,3,4,5,6,7]))


// counting the words of the list..


const numbers=()=>{
    let string='Hello this is the javascript tutorial'
    for (const str in string){
        console.log(Number(str)+1)
    }
}
numbers()

// #counting the strings..

const count=()=>{
    let a="swamy"
    for(const x in a){
        console.log(Number(x) +1)
    }
}
count()




// counting the number of strings in the phrase..

const count1=(phrase)=>{
    return {result: phrase.length}
}
let phrase="manusha"

console.log(count1(phrase))

// sum of array

const sum=(numbers)=>{
    let result =0
    for (const number of numbers){
        console.log(number)
        result=result+number
    }
    return {result:"The sum of the array",result}
}
console.log(sum([1,2,3,4,5,6,7]))


// finding the largest number in the array.

const list=(numbers)=>{
   let max=numbers[0]
   let n=numbers
    for (const i of n){
        if (numbers[i]>max){
            max=numbers[i]
        }
    }
    return max
}
let man=[12,3,4,5,6]
console.log(list(man))


// #finding the largest number in the array.

const large=(numbers)=>{
    let max=numbers[0]
    let n=numbers
    for (x of n){
        if (numbers[x]>max){
            max=numbers[x]
        }
        
    }
    return max
}
console.log(large([1,4,0,8,3,7,2]))


