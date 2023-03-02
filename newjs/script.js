a=[1,2,3,4,5,6]
a.push(7)
console.log(a)
Array.prototype.mypush=function(item){
    this[this.length]=item
    return this
}
console.log(a.mypush('manairuhdgjxbxfh'))