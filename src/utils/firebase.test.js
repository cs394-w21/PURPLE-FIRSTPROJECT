import { mapFormToDb } from "./firebase";

describe("mapFormToDb", () => {
  test("Works on objects with the shape of our schema", () => {
    expect(
      mapFormToDb({
        someKey: [{ a: "b" }, { c: "d" }, { e: "f" }, { g: "h" }],
        anotherKey: [{ i: "j" }, { k: "l" }, { m: "n" }, { o: "p" }],
      })
    ).toEqual({
      someKey: {
        0: { a: "b" },
        1: { c: "d" },
        2: { e: "f" },
        3: { g: "h" },
      },
      anotherKey: {
        0: { i: "j" },
        1: { k: "l" },
        2: { m: "n" },
        3: { o: "p" },
      },
    });
  });
});
