let balance = 500.00;
class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}
class Transaction {

  constructor(amount, account, opt) {
    this.amount = amount;
    this.account = account;
    if(opt === 'withdrawal') {
      this.option = 'withdrawal';
      this.withdrawal();
    } else if (opt === 'deposit') {
      this.option = 'deposit';
      this.deposit();
    }
  }

  withdrawal() {
    return Math.floor(this.account.balance -= this.amount)
  }

  deposit() {
    return Math.floor(this.account.balance += this.amount)
  }

}
// class Withdrawal extends Transaction {

//   // commit() {
//   //   this.account.balance -= this.amount;
//   // }

//   get value() {
//     this.amount = -this.amount;
//     return this.amount;
//   }

// }

// class Deposit extends Transaction {

//   // commit() {
//   //   this.account.balance += this.amount;
//   // }

//   get value() {
//     return this.amount;
//   }

// }



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

// t1 = new Transaction(50.25, myAccount,);
// t1.commit();
// console.log('Transaction 1:', t1, "myAccount: ", myAccount);

// t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Deposit(120.00, myAccount);
// t3.commit();
// console.log('Transaction 3:', t3);

t1 = new Transaction(50.25, myAccount, "deposit");
console.log('Transaction 1:', t1);

t2 = new Transaction(9.99, myAccount, "withdrawal");
console.log('Transaction 2:', t2);

t3 = new Transaction(120.00, myAccount, "withdrawal");
console.log('Transaction 3:', t3);



console.log('Balance:', balance);
