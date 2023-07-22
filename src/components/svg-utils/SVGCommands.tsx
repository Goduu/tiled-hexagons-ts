import { Component } from "react";
import { type Vertex } from "../hexagons/Vertex";

interface SVGCommandsProps {
  commands?: string[];
}
interface SVGCommandsState {
  commands: string[];
}

function svgCommandsTransformPropsToState() {
  return {
    commands: [],
  };
}

export class SVGCommands extends Component<SVGCommandsProps, SVGCommandsState> {
  constructor(props: SVGCommandsProps) {
    super(props);
    this.state = svgCommandsTransformPropsToState();
  }

  toString() {
    return this.state.commands.join(" ");
  }

  // Svg move to command (M)
  move(vec2: Vertex) {
    this.state.commands.push(`M${vec2.state.x} ${vec2.state.y}`);
    return this;
  }

  // Svg draw line to point from current position command (L)
  drawLine(vec2: Vertex) {
    this.state.commands.push(`L${vec2.state.x} ${vec2.state.y}`);
    return this;
  }

  // Svg bezier quadratic curve command (Q)
  quadraticCurve(controlVec2: Vertex, endVec2: Vertex) {
    this.state.commands.push(
      `Q${controlVec2.state.x} ${controlVec2.state.y} ${endVec2.state.x} ${endVec2.state.y}`
    );
    return this;
  }

  // Svg shortcut close path command (Z)
  closePath() {
    this.state.commands.push("Z");
    return this;
  }
}
