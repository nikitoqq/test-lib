import { SayHelloProps } from "./types";

export function SayHello({ firstName, lastName, age }: SayHelloProps) {
  console.log("hello!");
  console.log(`Your first name is ${firstName}`);

  if (lastName) {
    console.log(`Your first name is ${lastName}`);
  }

  if (age) {
    console.log(`Your first name is ${age}`);
  }
}
