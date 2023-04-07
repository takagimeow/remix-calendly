import { it, expect } from "vitest";
import { sayHello } from ".";

it("smoke test", () => {
  expect(sayHello()).toBe(true);
});