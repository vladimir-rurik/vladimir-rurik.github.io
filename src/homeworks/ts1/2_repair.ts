/**
 * Here is code with type errors. You need to fix them
 * */

// // We haven't covered this, but from the error text you can understand how to fix it
// export const getFakeApi = async (): void => {
//   const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
//   console.log(result);
// };
//
// // We haven't covered this, but from the error text you can understand how to fix it
// export class SomeClass {
//   constructor() {
//     this.set = new Set([1]);
//     this.channel = new BroadcastChannel('test-broadcast-channel');
//   }
// }
//
// export type Data = {
//   type: 'Money' | 'Percent';
//   value: DataValue;
// };
//
// export type DataValue = Money | Percent;
//
// export type Money = {
//   currency: string;
//   amount: number;
// };
//
// export type Percent = {
//   percent: number;
// };
//
// // Here, perhaps, you need to use `as`, or maybe pass to `switch` a bit differently
// const getDataAmount = (data: Data): number => {
//   switch (data.type) {
//     case 'Money':
//       return data.value.amount;
//
//     default: {
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const unhandled: never = data; // here, perhaps, you need to use something else. :never should remain
//       throw new Error(`unknown type: ${data.type}`);
//     }
//   }
// };
