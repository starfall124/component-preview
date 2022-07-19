import { Color, ContainerComponent } from "../componentTypes";
import { generateStyle, getColor } from "./index";

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

/** Test functions at utils */
describe("Utils", () => {
  test("Should generate correct style object according to the component type", () => {
    expect(generateStyle(mockData, parentContainerFrame, true)).toMatchObject({
      position: "relative",
      left: 0,
      top: 0,
      width: 300,
      height: 196,
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 1)",
      borderRadius: 0,
    });
  });

  test("Should get correct color from Color object", () => {
    const testColor: Color = {
      r: 0,
      g: 0.7960784435272217,
      b: 0.41396069526672363,
      a: 1,
    };
    expect(getColor(testColor)).toEqual("rgba(0, 203, 106, 1)");
  });
});
