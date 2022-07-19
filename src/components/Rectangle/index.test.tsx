/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Rectangle from "./index";
import { RectangleComponent } from "../../componentTypes";

/** Define parent container frame and mock data for testing */
const parentContainerFrame = { x: 0, y: 0, width: 0, height: 0 };
const mockData: RectangleComponent = {
  id: "0d015b7f-da91-415d-abad-bb50ad049e0e",
  type: "rectangle",
  name: "Photo Shape",
  frame: {
    x: 16,
    y: 16,
    width: 56,
    height: 56,
  },
  backgroundColor: {
    r: 0.8509804010391235,
    g: 0.8509804010391235,
    b: 0.8509804010391235,
    a: 1,
  },
  cornerRadius: 8,
};

/** Test rectangle type component with mock data */
describe("Rectangle", () => {
  test("Should display a rectangle", async () => {
    render(
      <Rectangle
        properties={mockData}
        parentContainerFrame={parentContainerFrame}
      />
    );

    const rectangleComponent = screen.getByTestId("Photo Shape");
    expect(rectangleComponent).toBeVisible();
  });
});
