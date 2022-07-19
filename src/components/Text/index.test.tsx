/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Text from "./index";
import { TextComponent } from "../../componentTypes";

/** Define parent container frame and mock data for testing */
const parentContainerFrame = { x: 0, y: 0, width: 0, height: 0 };
const mockData: TextComponent = {
  id: "ea1e408a-9cc8-4706-9236-ec6996df4006",
  type: "text",
  name: "Frank Smith",
  content: "Frank Smith",
  fontSize: 16,
  fontWeight: 400,
  fontFamily: "Helvetica",
  textColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  },
  frame: {
    x: 104,
    y: 153,
    width: 87,
    height: 18,
  },
};

/** Test text type component with mock data */
describe("Text", () => {
  test("Should display Frank Smith", async () => {
    render(
      <Text properties={mockData} parentContainerFrame={parentContainerFrame} />
    );

    const profileHeaderComponent = screen.getByTestId("Frank Smith");
    expect(profileHeaderComponent).toHaveTextContent("Frank Smith");
  });
});
