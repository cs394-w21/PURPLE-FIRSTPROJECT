import validateSiteURL from "./validateSite";

describe("Our validation", () => {
  test("Validates the correct strings", () => {
    expect(validateSiteURL("asd")).toEqual(true);
  });
  test("Detects the invalid strings1", () => {
    expect(validateSiteURL("****")).toEqual(false);
  });
  test("Detects the invalid strings2", () => {
    expect(validateSiteURL("nervous-line.surge.sh")).toEqual(false);
  });
  test("Detects the invalid strings2", () => {
    expect(validateSiteURL("ABC")).toEqual(true);
  });
  test("Detects the undefined input", () => {
    expect(validateSiteURL(undefined)).toEqual(false);
  });
});
