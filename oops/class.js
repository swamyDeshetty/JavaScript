class car{

    constructor(name,color,model){
        this.name=name
        this.color=color
        this.model=model
        console.log('car is going to start')
        this.currentspeed=0

    }
    drive(){
        console.log('car is started ')
        this.currentspeed +=30
        console.log("The current speed of the car is",this.currentspeed)
        this.currentspeed+=30
        console.log('car is moving with the average speed',this.currentspeed)
    }
    brake(){
        this.currentspeed -=40
        console.log('Hey one car is coming plz press the breakk.. and go with the',this.currentspeed,'speed')

    }
    off(){
        this.currentspeed=0
        console.log('Hey we reached our destination turn off the car and the speed reduces to the',this.currentspeed)
    
    }
}


const obj=new car('swift','white',3564)
console.log('The current car speed',obj.currentspeed)
obj.drive()
obj.brake()
console.log("After the break the speed is the ",obj.currentspeed)
obj.off()
