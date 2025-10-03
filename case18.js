
      // prototype


var dummyValueOfBankName = "";
function bank(bankname,locatoin){
   console.log(bank.arguments);
   console.log(this); 
   dummyValueOfBankName = bank.arguments[1];
   dummyValueOfBankName = locatoin;
}
bank("BOI","APGB");
console.log(dummyValueOfBankName); 
console.log(bank.name);
console.log(bank.length);
console.log(bank.arguments);






function Person(name, age) {
  this.name = name;
  this.age = age;
}


Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};


const alice = new Person("Alice", 22);
alice.greet();