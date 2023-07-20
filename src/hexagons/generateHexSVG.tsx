import { SVGCommands } from "../svg-utils/SVGCommands";
import { Vertex } from "./Vertex";

/**
 * @returns the path's "d" attribute for the hexagon
 */
export function generateHexDPath(sideLength: number, borderRadius: number) {
  //from geometry of a hexagon
  const width = Math.sqrt(3) * sideLength;
  const height = 2 * sideLength;

  //a, b, c, d, e and f represent the vertices
  //start at the top point
  const vertexA = new Vertex({ x: width / 2, y: 0 });
  const vertexB = new Vertex({ x: width, y: height / 4 });
  const vertexC = new Vertex({ x: width, y: (3 * height) / 4 });
  const vertexD = new Vertex({ x: width / 2, y: height });
  const vertexE = new Vertex({ x: 0, y: (3 * height) / 4 });
  const vertexF = new Vertex({ x: 0, y: height / 4 });

  if (borderRadius == 0) {
    const pointyHexagon = new SVGCommands({});
    return pointyHexagon
      .move(vertexA)
      .drawLine(vertexB)
      .drawLine(vertexC)
      .drawLine(vertexD)
      .drawLine(vertexE)
      .drawLine(vertexF)
      .closePath()
      .toString();
  }

  /*for hexagons with curved corners, we use the quadratic curve command
	the vertex itself will be the control point
	the start point will be a point slightly to the left of the vertex along the perimeter of the hexagon
	and the end point will be a point slightly to the right of the vertex along the perimeter of the hexagon
	the distance that the start and end points are along the adjacent sides is given by the curve radius*/
  const dl = vertexF.subtract(vertexA).normalize().scalarMultiple(borderRadius);
  const dr = vertexB.subtract(vertexA).normalize().scalarMultiple(borderRadius);
  const dd = new Vertex({ x: 0, y: borderRadius });

  const roundedHexagon = new SVGCommands({});
  roundedHexagon
    .move(vertexA.add(dl))
    .quadraticCurve(vertexA, vertexA.add(dr))
    .drawLine(vertexB.subtract(dr))
    .quadraticCurve(vertexB, vertexB.add(dd))
    .drawLine(vertexC.subtract(dd))
    .quadraticCurve(vertexC, vertexC.add(dl))
    .drawLine(vertexD.subtract(dl))
    .quadraticCurve(vertexD, vertexD.subtract(dr))
    .drawLine(vertexE.add(dr))
    .quadraticCurve(vertexE, vertexE.subtract(dd))
    .drawLine(vertexF.add(dd))
    .quadraticCurve(vertexF, vertexF.subtract(dl))
    .closePath();

  return roundedHexagon.toString();
}
