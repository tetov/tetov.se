import { cvFormatTimespan } from "src/components/cv";

describe("cvFormatTimespan", () => {
  it("No input", () => {
    const timeSpan = cvFormatTimespan({});
    expect(timeSpan).toBe("");
  });
  it("Different dates", () => {
    const timeSpan = cvFormatTimespan({ startDate: "2019", endDate: "2020" });
    expect(timeSpan).toBe("2019 – 2020");
  });
  it("Only start date", () => {
    const timeSpan = cvFormatTimespan({ startDate: "2019" });
    expect(timeSpan).toBe("2019 –");
  });
  it("Only end date", () => {
    const timeSpan = cvFormatTimespan({ endDate: "2019" });
    expect(timeSpan).toBe("2019");
  });
  it("Same dates", () => {
    const timeSpan = cvFormatTimespan({
      startDate: "2019-01-01",
      endDate: "2019-01-01",
    });
    expect(timeSpan).toBe("2019-01-01");
  });
});
