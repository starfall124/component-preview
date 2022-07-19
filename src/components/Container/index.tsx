import React from "react";

import { ContainerComponent, Rect } from "../../componentTypes";
import { generateStyle } from "../../utils";

interface IContainerProps {
  /** Text, Rectangle, and Ellipse type component inside Container type component */
  children: React.ReactNode;
  /** Data source that will be used for render component */
  properties: ContainerComponent;
  /** Is root container */
  isRootContainer: boolean;
  /** Parent container frame to calculate position of the container */
  parentContainerFrame: Rect;
}
/** Component that render container type component */
const Container: React.FC<IContainerProps> = ({
  children,
  properties,
  isRootContainer,
  parentContainerFrame,
}) => {
  // Generate style for the container type component
  const style = generateStyle(
    properties,
    parentContainerFrame,
    isRootContainer
  );

  /** Use name as data-testid prop for testing */
  return (
    <div data-testid={properties.name} id={properties.id} style={style}>
      {children}
    </div>
  );
};

export default Container;
