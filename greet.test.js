import { greet } from "./greet";
import { coaches } from "./coaches";

/* 
Acceptance Criteria
- returns "Hello <name>!" if called greet(<name>)
- returns Hello Stranger if called with no input
- returns Hello Coach if called with a coach name
*/

test('returns "Hello Karim!" if called greet("Karim")', () => {
  const result = greet("Karim");
  expect(result).toBe("Hello Karim!");
});

test('returns "Hello Johann!" if called greet("Johann")', () => {
  const result = greet("Johann");
  expect(result).toBe("Hello Johann!");
});

test('returns "Hello Stranger!" if called greet()', () => {
  const result = greet();
  expect(result).toBe("Hello Stranger!");
});

test('returns "Hello Coach!" if called greet(<coach name>)', () => {
  coaches.forEach((coachName) => {
    const result = greet(coachName);
    expect(result).toBe("Hello Coach!");
  });
});
