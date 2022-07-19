import React from "react";

import { Rect, RectangleComponent } from "../../componentTypes";
import { generateStyle } from "../../utils";

interface IRectangleProps {
  /** Data source that will be used for render component */
  properties: RectangleComponent;
  /** Parent container frame to calculate position of the rectangle */
  parentContainerFrame: Rect;
}
/** Component that render rectangle type component */
const Rectangle: React.FC<IRectangleProps> = ({
  properties,
  parentContainerFrame,
}) => {
  // Generate style for the rectangle type component
  const style = generateStyle(properties, parentContainerFrame);

  /** Use name as data-testid prop for testing */
  return (
    <div data-testid={properties.name} id={properties.id} style={style}></div>
  );
};

export default Rectangle;
