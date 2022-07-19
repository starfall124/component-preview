import React from "react";

import { Component, Color, Rect } from "../componentTypes";

/**
 * Take Color object and returns calculated rgba color string
 *
 * @param {Color} color - Color object
 * @returns {String} - rgba color string
 */
export const getColor = (color: Color) => {
  /** Use Math.round() to get rounded number to the nearest integer */
  return `rgba(${Math.round(color.r * 255)}, ${Math.round(
    color.g * 255
  )}, ${Math.round(color.b * 255)}, ${color.a})`;
};

/**
 * Return style object for given component
 *
 * @param {Component} properties - Current rendered component object
 * @param {Rect} parentContainerFrame - Parent container object frame to calculate current component position
 * @param {Boolean} [isRootContainer] - Optional param to check current component root container
 * @returns {React.CSSProperties} Style object for current component
 */
export const generateStyle = (
  properties: Component,
  parentContainerFrame: Rect,
  isRootContainer: boolean = false
) => {
  /** Set common properties for all types of components */
  const style: React.CSSProperties = {
    /** Set position as relative for root container because child components will be positioned relative to it */
    position: isRootContainer ? "relative" : "absolute",
    width: properties.frame.width,
    height: properties.frame.height,
    /** Calculate left position relative to the parent container */
    left: properties.frame.x - parentContainerFrame.x,
    /** Calculate top position relative to the parent container */
    top: properties.frame.y - parentContainerFrame.y,
  };

  /** Set backgroundColor and border properties for container, rectangle, and ellipse types components */
  if (
    properties.type === "container" ||
    properties.type === "rectangle" ||
    properties.type === "ellipse"
  ) {
    /** Check if backgroundColor is defined */
    if (properties.backgroundColor) {
      style.backgroundColor = getColor(properties.backgroundColor);
    }

    /** Check if border is defined */
    if (properties.border) {
      style.borderColor = getColor(properties.border.color);
      style.borderWidth = properties.border.width;
      style.borderStyle = "solid";
    }
  }

  /** Set borderRadius property for container and rectangle types components */
  if (properties.type === "container" || properties.type === "rectangle") {
    style.borderRadius = properties.cornerRadius;
  }

  /** Set font properties for text type component */
  if (properties.type === "text") {
    style.fontFamily = properties.fontFamily;
    style.fontSize = properties.fontSize;
    style.fontWeight = properties.fontWeight;
    style.color = getColor(properties.textColor);
  }

  /** Set borderRadius to 50% for ellipse type component */
  if (properties.type === "ellipse") {
    style.borderRadius = "50%";
  }

  return style;
};
