const letterfrequency=(phrase)=>{
    console.log(phrase)
    // for(const number of phrase){
    //     console.log(number)
    // }
    let frequency={}
    for (const letter of phrase){
        // if letter exist in frequency
        if ( letter in frequency){
            frequency[letter]=frequency[letter]+1

        }else{
            frequency[letter]=1
        }
        
        
    }
    return frequency
}
console.log(letterfrequency('harahara'))

// // counting the frequency of the phrase..

const letterfrequency1=(phrase)=>{
    let frequency1={}
    for (const letter of phrase){
        if (letter in frequency1){
            frequency1[letter]=frequency1[letter]+1
        }else{
            frequency1[letter]=1
        }
      
    }
    return frequency1
}
console.log(letterfrequency1('harahamaha'))


// #word frequency..
const wordfrequency=(phrase)=>{
    let frequency={}
    let words=phrase.split(' ')  // splliting the words with the space 
    // console.log(words)
    for (const word of words){   //iterating the spllting array..
        if(word in frequency){  //checking the if word is there then increment by 1 unless =1
            frequency[word]+=1 // this means increment the word of frequency by 1..
        }else{
            frequency[word]=1 // =1
        }

    }
    return frequency
}
console.log(wordfrequency('lol what lol'))


// we can call the function in another function. this is main feature of the function..

const wordcounting=(phrase)=>{
     const array=phrase.split(' ')
    return letterfrequency(array)
}
console.log(wordcounting('swamy is the python developer and php developer'))


//  some array methods in js map,filter,

let result=[1,2,3,4].map(number=>number*2)
console.log(result)


// #es6 arrow function 

const double=(numbers)=>{
    return numbers.map(number=>number*2)
}
console.log(double([1,2,4,5,5]))

// filter method...

const filtering=(numbers)=>{
    return numbers.filter(number=>number%2==0)
}
console.log(filtering([1,3,4,1,0,6,8]))

// advance filter...

const family=[ {name:'swamy',age:22,networth:3.5},{name:'shiva',age:26,networth:4},{name:'pranitha',age:25,networth:3},]

console.log(family.filter(familyy=>familyy.networth>3))



//  Map function using the es6 function..

let mapp=(numbers)=>{
    return numbers.map(number=>number*2)
}
console.log(mapp([1,2,3,4,5]))

// filter
actors=[{name:'swamy',salary:20000 , role:'pythondev'},
{name:'shiva',salary:30000 , role:'dev'},
{name:'pranitha',salary:10000 , role:'Teacher'}]

let math=actors.filter(actor=>actor.salary>15000)

// es6 function
// reduce function..

const nums=[1,2,4,5]
const result1=nums.reduce((prev,next)=>prev+next)
console.log(result1)

// we can add the list likethis alsoo..
function sum(a,b){
    return a+b

}
let x = [1,3,4,5,7]
let op =x.reduce(sum)
console.log(op)

// multiplying the number with the function and adding into the reduce function..
function multiply(a,b){
    return a*b
}
let a=[1,6,7,8]
let oput=a.reduce(multiply)
console.log(oput)

let empp=[{name:'swamy',salary:20000 , role:'pythondev'},
{name:'shiva',salary:30000 , role:'dev'},
{name:'pranitha',salary:10000 , role:'Teacher'}]

let empp4=empp.reduce((prev,next)=>prev+next)
console.log(empp4)

