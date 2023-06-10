// Inbuilt types

// number
// string
// arr[]
// boolean

// ------------------------------

// let num1 = 4;

// const calculate = (num1: number, num2: number) => {
//   return num1 + num2;
// };

// console.log(calculate(num1, 3));

// ------------------------------

// const getTotal = (numbers: Array<number>) => {
//   return numbers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// };

// console.log(getTotal([3, 2, 1]));

// ------------------------------

// const user = {
//   firstName: "sumit",
//   lastName: "kumar",
//   role: "professor",
// };

// // need to  above objects or import
// console.log(user); //autocompletion

// ------------------------------

// custom Types || Type alias

type User = {
  name: string;
  age: number;
  address?: string; // use ? for optional
};

// const user: User = {
//   name: "sumit",
//   age: 22,
//   // address: 'Garden Layout'
// };

const login = (userDate: User): User => {
  // by default is void for function
  return userDate;
};

console.log(login({ name: "sam", age: 12 })); // duc type

// ----------------------

const user = {
  name: "sumit",
  age: 22,
};

console.log(login(user)); // Type Alias

// -----------------

type ID = number; //alias
type IDString = number | string; //alias

const userId: ID = 111;
const userIdString: IDString = 111;

// ----------------------

//  Interface
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}
interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 133,
  payeeAccountNumber: 131,
};

const transaction2: Transaction = {
  payerAccountNumber: 1363,
  payeeAccountNumber: 1831,
};

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "sumit kumar",
  balance: 4000,
  isActive: true,
  transactions: [transaction1, transaction2],
};

//------------

// Extend

interface Book {
  name: string;
  price: number;
}

interface EBook extends Book {
  // name: string;
  // price: number;
  fileSize: number;
  format: string;
}

interface AudioBook extends EBook {
  // name: string;
  // price: number;
  // fileSize: number;
  // format: string;
  duration: number;
}

const book: AudioBook = {
  name: "Atomic",
  price: 1000,
  fileSize: 300,
  format: "pdf",
  duration: 5,
};
