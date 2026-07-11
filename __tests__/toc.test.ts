import { describe, it, expect } from "vitest";
import { extractHeadings } from "@/lib/toc";

describe("extractHeadings", () => {
  it("extracts h2 headings with slugified ids", () => {
    const source = `
Some intro text.

## The Problem

Body text here.

## The Architecture
`;
    expect(extractHeadings(source)).toEqual([
      { text: "The Problem", id: "the-problem" },
      { text: "The Architecture", id: "the-architecture" },
    ]);
  });

  it("does not pick up h3 headings, only h2", () => {
    const source = `
## Real Section

### Not This One
`;
    const result = extractHeadings(source);
    expect(result).toHaveLength(1);
    expect(result[0]?.text).toBe("Real Section");
  });

  it("returns an empty array when there are no h2 headings", () => {
    expect(extractHeadings("Just a paragraph, no headings.")).toEqual([]);
  });
});
