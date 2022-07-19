import React from "react";

import { Rect, TextComponent } from "../../componentTypes";
import { generateStyle } from "../../utils";

interface ITextProps {
  /** Data source that will be used for render component */
  properties: TextComponent;
  /** Parent container frame to calculate position of the text */
  parentContainerFrame: Rect;
}
/**
 * Component that render text type component
 */
const Text: React.FC<ITextProps> = ({ properties, parentContainerFrame }) => {
  // Generate style for the text type component
  const style = generateStyle(properties, parentContainerFrame);

  /** Use name as data-testid prop for testing */
  return (
    <div data-testid={properties.name} id={properties.id} style={style}>
      {properties.content}
    </div>
  );
};

export default Text;
