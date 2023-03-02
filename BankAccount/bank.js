class bank{

    balance(){
        this.balance=100
        console.log('the current balance of the account is',this.balance)
        
    }
    deposit(){
        this.balance+=100
        console.log('My mom said that go and deposit the money ,after the deposit the balance in my account',this.balance)

    }
    withdraw(){
        this.balance=0
        console.log('My mom said go and bring the total money from ur account')
        console.log('my account balance is',this.balance)
    }
}
const obj= new bank()
obj.balance()
console.log(obj.balance)
obj.deposit()
console.log(obj.balance)
obj.withdraw()
console.log(obj.balance)