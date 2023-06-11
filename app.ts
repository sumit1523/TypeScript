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

// Mergeing

interface Book {
  name: string;
  price: number;
}
interface Book {
  size: number;
}

const book1: Book = {
  name: "Atomiv ahbit",
  price: 1,
  size: 1,
};

// ---------------------

// you can use any on type or merge
//  but in typr merging is not posible
// types are used for primitives

// ----------------

//  Unions

type ID1 = number | string;

const printId = (id: ID1) => {
  // Narrowing
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
};
printId("1");

//------------------------

const getFirstThree = (x: string | number[]) => {
  return x.slice(0, 3);
};

console.log(getFirstThree("hello")); // output => hel

// =================

// GENERICS

const logString = (arg: string) => {
  console.log(arg);
  return arg;
};
const logNumber = (arg: number) => {
  console.log(arg);
  return arg;
};
const logArray = (arg: any[]) => {
  console.log(arg);
  return arg;
};

// common

const logAnything = <T>(arg: T): T => {
  console.log(arg);
  return arg;
};

logString("logged In");
logNumber(65);
logArray([65, 66]);

logAnything([2, 3, 4]);
logAnything(["2", 3, 4]);

interface HasAge {
  age: number;
}

const getOldest = (people: HasAge[]): HasAge => {
  return people.sort((a, b) => b.age - a.age)[0];
};

const people: HasAge[] = [{ age: 11 }, { age: 65 }, { age: 51 }];

interface players {
  name: string;
  age: number;
}
const players: players[] = [
  { name: " jhon1", age: 1 },
  { name: " jhon2", age: 5 },
  { name: " jhon3", age: 5 },
];

getOldest(people).age;

// Assertion
// getOldest(players).age;
const person = getOldest(players) as players;

// -------------

const getOldest1 = <T extends HasAge>(people: T[]): T => {
  return people.sort((a, b) => b.age - a.age)[0];
};
person.age;
person.name;

// ----------------------------------------------------------------

interface IPost {
  title: string;
  id: number;
  description: string;
}
interface IUser {
  id: number;
  name: string;
  age: number;
}
const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://exaample.com${path}`);
  return response.json();
};
const fetchUserData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://exaample.com${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchPostData("/posts");
  const users = await fetchUserData("/users");
  posts[0].description;
  posts[0].id;

  users[0].age;
  users[0].id;
})();

// Generic

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://exaample.com${path}`);
  return response.json();
};

(async () => {
  const users = await fetchData<IUser[]>("/users");
  const posts = await fetchData<IPost[]>("/posts");

  posts[0].description;
  users[0].age;
  users[0].id;
})();

// -----------------

// Strunctural typing or  duck typing
interface ICredentials {
  username: string;
  password: string;
  isAdmin?: boolean;
}

const login1 = (credentials: ICredentials): boolean => {
  console.log(credentials);
  return true;
};

const user1 = {
  // const user1:ICredentials  = {
  username: "user1",
  password: "password",
  isAdmin: true,
};

login1(user1);

// -------------------

interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): boolean;
}

const auth: IAuth = {
  username: "user1",
  password: "password",
  login(username: string, password: string) {
    return true;
  },
};
