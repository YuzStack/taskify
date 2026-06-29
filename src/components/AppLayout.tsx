// BASICS ‼️
// let name: string; // type of string
// let age: number; // type of number
// let isStudent: boolean; // type of boolean
// let hobbies: string[]; // an array of string
// let role: [number, string]; // tuples

// // Object type
// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: 'Yusuf',
//   age: 23,
// };

// let lotsOfPeople: Person[];

// INTERMEDIATE ‼️
// let age: number | string; // Union

// function printName(name: string) {
//   console.log(name);
// }

// let printAge: (age: number) => void;

// printAge = function (age) {
//   console.log(age);
// };

// let personName: unknown;

// interface Person {
//   name: string;
//   age?: number;
// }

// type X = {
//   a: string;
//   b: number;
// };

// type Y = X & {
//   c: string;
//   d: number;
// };

// const y: Y = { a: '', b: 23, c: '', d: 33 };

// interface Guy extends Person {
//   profession: string;
// }

// const guy: Guy = {
//   name: 'Yusuf',
//   age: 22,
//   profession: 'Frontend Engineer',
// };

export default function AppLayout() {
  return (
    <h1 className='p-2 text-2xl font-semibold'>
      Hello, this is a Vite + TypeScript + React + Tailwind project, enjoy!
    </h1>
  );
}
