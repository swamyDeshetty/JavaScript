// es6 arrow function(2 arguments)
//object 
// //template literals

// we can write the function like this also

const introduce=(name,age,role)=>{
    // #object
    const obj={name:name,
        age:age,
        role:role,
        needs:15000,
        savings:10000,
        networth: function(){
            return this.needs + this.savings
        }
    }
    const bio=`Hi my name is the ${obj.name} and my age is the ${obj.age}
     and myrole is the ${obj.role} and my networth is ${obj.networth()}`
    return bio
}
console.log(introduce('swamy',22,'PYTHON DEVELOPER'))


// #we can also write function like this.

const hello=(name,age,role)=>{

    
    // creating the object..
    const person={name:name,
        role:role,
        age:age,
        savings:15000,
        needs:10000,
        salary:function(){
            return this.savings + this.needs
        }
    }
    const bio=`Hi my name is the ${person.name} and my role is the ${person.role}
    and my age is the ${person.age} and my networth is the ${person.salary()}`

    return bio

}

console.log(hello('swamy','PythonDeveloper',22))


// #another  function

const company=(name,role,exp,Savings,Needs)=>{
    
    // object
    const emp={
        name:name,
        role:role,
        exp:exp,
        Savings:Savings,
        Needs:Needs,
        networth:function(){
            return this.Needs + this.Savings
        }
    }
    const bio =`Hi my name is the ${emp.name} and my role is ${emp.role}
    and my exp is the ${exp} and my networth is the ${emp.networth()} `
    return bio
}
console.log(company('swamy','PythonDeveloper',' 1/2 yrs of experience',10000,15000))