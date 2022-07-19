import React from "react";

import { EllipseComponent, Rect } from "../../componentTypes";
import { generateStyle } from "../../utils";

interface IEllipseProps {
  /** Data source that will be used for render component */
  properties: EllipseComponent;
  /** Parent container frame to calculate position of the ellipse */
  parentContainerFrame: Rect;
}
/** Component that render ellipse type component */
const Ellipse: React.FC<IEllipseProps> = ({
  properties,
  parentContainerFrame,
}) => {
  // Generate style for the ellipse type component
  const style = generateStyle(properties, parentContainerFrame);

  /** Use name as data-testid prop for testing */
  return (
    <div data-testid={properties.name} id={properties.id} style={style}></div>
  );
};

export default Ellipse;
