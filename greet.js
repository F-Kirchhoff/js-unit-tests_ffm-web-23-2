export function greet(name = "stranger") {
  if (name === "Felix") {
    return "Hello coach!";
  }

  return `Hello ${name}!`;
}
