class Bank {
    constructor(balance) {
      this.balance = balance
    }
    withdraw(amount) {
      if (this.balance - amount <= 0) {
        alert("You don't have money to withdraw")
        return
      }
  
      console.log('withdrew', `$${amount}`)
      this.balance -= amount
      console.log({ balance: this.balance })
    }
    deposit(amount) {
      console.log('deposited', `$${amount}`)
      this.balance += amount
      console.log({ balance: this.balance })
    }
  }
  
  const swamychecking = new Bank(100)
  console.log(swamychecking.balance)
  swamychecking.deposit(100)
  swamychecking.withdraw(100)
 
  
  const depositbutton = document.getElementById('deposit')
  const withdrawbutton = document.getElementById('withdraw')
  const amountInput = document.getElementById('amount')
  const BalanceDiv  = document.getElementById('balance')
  
  depositbutton.onclick = () => {
    const amount=Number(amountInput.value)
    swamychecking.deposit(amount)
    BalanceDiv.innerText=`Balance:${swamychecking.balance}`
    
    
  }
  withdrawbutton.onclick = () => {
    const amount=Number(amountInput.value)
    swamychecking.withdraw(amount)
    BalanceDiv.innerText=`Balance:${swamychecking.balance}`
  }
  