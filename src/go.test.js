import { go } from "./go";

test(`has the name Go`, () => {
  expect(go.name).toBe("Go");
});

test(`has reward of 100`, () => {
  expect(go.reward).toBe(100);
});
