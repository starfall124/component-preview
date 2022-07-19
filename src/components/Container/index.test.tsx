/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Container from "./index";
import { ContainerComponent } from "../../componentTypes";

/** Define parent container frame and mock data for testing */
const parentContainerFrame = { x: 0, y: 0, width: 0, height: 0 };
const mockData: ContainerComponent = {
  id: "4ec40cc1-f706-40cd-8c29-5b1db8186b7a",
  type: "container",
  name: "Profile Header",
  frame: {
    x: 0,
    y: 0,
    width: 300,
    height: 196,
  },
  backgroundColor: {
    r: 1,
    g: 1,
    b: 1,
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
  cornerRadius: 0,
  children: [],
};

/** Test container type component with mock data */
describe("Container", () => {
  test("Should display a container", async () => {
    render(
      <Container
        properties={mockData}
        parentContainerFrame={parentContainerFrame}
        isRootContainer={true}
      >
        <></>
      </Container>
    );

    const profileHeaderComponent = screen.getByTestId("Profile Header");
    expect(profileHeaderComponent).toBeVisible();
  });
});
