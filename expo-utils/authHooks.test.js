import { getSiteSet } from "./authHooks";

jest.mock("firebase", () => ({
  initializeApp: () => {},
  database: () => ({
    ref: () => ({
      // eslint-disable-next-line no-unused-vars
      once: (_, fn, __) =>
        fn({
          val: () => ({
            andrew: {
              data: "exists",
            },
            joshua: {
              data: "exists",
            },
            rj: {
              data: "exists",
            },
            ian: {
              data: "exists",
            },
          }),
        }),
    }),
  }),
}));

describe("getSiteSet", () => {
  test("Works with the shape of our schema", async () => {
    const aSet = await getSiteSet();
    expect(aSet).toStrictEqual(new Set(["andrew", "joshua", "rj", "ian"]));
  });
});
