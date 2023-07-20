import { Component } from "react";

interface VertexProps {
  x: number;
  y: number;
}

interface DefinedState {
  x: number;
  y: number;
}

type VertexState = DefinedState & ReturnType<typeof transformPropsToState>;

function transformPropsToState(props: VertexProps) {
  return {
    x: props.x, // save for memoization
    y: props.y,
  };
}

export class Vertex extends Component<VertexProps, VertexState> {
  constructor(props: VertexProps) {
    super(props);
    this.state = transformPropsToState(props);
  }

  magnitude() {
    return Math.sqrt(this.state.x * this.state.x + this.state.y * this.state.y);
  }

  scalarMultiple(k: number) {
    return new Vertex({ x: k * this.state.x, y: k * this.state.y });
  }

  normalize() {
    return this.scalarMultiple(1 / this.magnitude());
  }

  add(v2: Vertex) {
    return new Vertex({
      x: this.state.x + v2.state.x,
      y: this.state.y + v2.state.y,
    });
  }

  subtract(v2: Vertex) {
    return this.add(v2.scalarMultiple(-1));
  }
}
