import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Badge } from "@/components/ui/badge";

describe("Badge", () => {
  it("renders its children", () => {
    const { getByText } = render(<Badge>Next.js</Badge>);
    expect(getByText("Next.js")).toBeTruthy();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Badge>TypeScript</Badge>);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
