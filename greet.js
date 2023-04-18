import { coaches } from "./coaches";

export function greet(name = "Stranger") {
  if (coaches.includes(name)) {
    return "Hello Coach!";
  }

  return `Hello ${name}!`;
}
