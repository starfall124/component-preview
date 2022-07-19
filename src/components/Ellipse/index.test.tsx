/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Ellipse from "./index";
import { EllipseComponent } from "../../componentTypes";

/** Define parent container frame and mock data for testing */
const parentContainerFrame = { x: 0, y: 0, width: 0, height: 0 };
const mockData: EllipseComponent = {
  id: "670f1396-37d1-43b7-818f-6ef501427157",
  type: "ellipse",
  name: "Avatar Shape",
  frame: {
    x: 90,
    y: 16,
    width: 120,
    height: 120,
  },
  backgroundColor: {
    r: 0.8509804010391235,
    g: 0.8509804010391235,
    b: 0.8509804010391235,
    a: 1,
  },
  border: {
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    },
    width: 1,
  },
};

/** Test ellipse type component with mock data */
describe("Ellipse", () => {
  test("Should display a ellipse", async () => {
    render(
      <Ellipse
        properties={mockData}
        parentContainerFrame={parentContainerFrame}
      />
    );

    const profileHeaderComponent = screen.getByTestId("Avatar Shape");
    expect(profileHeaderComponent).toBeVisible();
  });
});
