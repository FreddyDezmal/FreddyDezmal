import { describe, it, expect } from "vitest";
import { slugify } from "@/lib/utils";

describe("slugify", () => {
  it("lowercases and hyphenates a normal heading", () => {
    expect(slugify("Engineering Decisions")).toBe("engineering-decisions");
  });

  it("collapses non-alphanumeric characters into single hyphens", () => {
    expect(slugify("Trade-offs & Lessons Learned!")).toBe("trade-offs-lessons-learned");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify("  --Future Roadmap--  ")).toBe("future-roadmap");
  });

  it("handles a single word", () => {
    expect(slugify("Problem")).toBe("problem");
  });
});
