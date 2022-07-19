import { Component, Rect } from "./componentTypes";
import { Container, Ellipse, Rectangle, Text } from "./components";

interface IComponentPreviewProps {
  /** Data source that will be used for render component */
  component: Component;
}
/** Component that renders all the components in the preview */
const ComponentPreview: React.FC<IComponentPreviewProps> = ({ component }) => {
  /**
   * Take Color object and returns calculated rgba color
   *
   * @param {Component} componentData - Component object
   * @param {Boolean} isRootContainer - Is root container
   * @param {Rect} [parentContainerFrame] - Optional param to calculate position of the component
   * @returns {React.ReactNode} - React Node
   */
  const renderComponent = (
    componentData: Component,
    isRootContainer: boolean,
    parentContainerFrame: Rect = { x: 0, y: 0, width: 0, height: 0 }
  ) => {
    /** Get component id, type and parent container frame to assign key prop, check component type and calculate position properties */
    const { id, type, frame } = componentData;

    /** Render components according to their type */
    if (type === "container") {
      return (
        <Container
          key={id}
          properties={componentData}
          parentContainerFrame={parentContainerFrame}
          isRootContainer={isRootContainer}
        >
          {componentData.children.map((item) =>
            renderComponent(item, false, frame)
          )}
        </Container>
      );
    } else if (type === "text") {
      return (
        <Text
          key={id}
          properties={componentData}
          parentContainerFrame={parentContainerFrame}
        />
      );
    } else if (type === "ellipse") {
      return (
        <Ellipse
          key={id}
          properties={componentData}
          parentContainerFrame={parentContainerFrame}
        />
      );
    } else if (type === "rectangle") {
      return (
        <Rectangle
          key={id}
          properties={componentData}
          parentContainerFrame={parentContainerFrame}
        />
      );
    }
  };

  return (
    <div>
      <h3>{component.name}</h3>
      <div>{renderComponent(component, true)}</div>
    </div>
  );
};

export default ComponentPreview;
