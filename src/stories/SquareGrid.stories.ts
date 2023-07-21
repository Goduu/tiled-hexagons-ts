import type { Meta, StoryObj } from "@storybook/react";

import { SquareGrid } from "../squareGrid/SquareGrid";

const meta = {
  title: "SquareGrid",
  component: SquareGrid,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SquareGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grid: Story = {
  args: {
    tileSideLengths: 60,
    tileGap: 4,
    tileBorderRadii: 9,
    maxHorizontal: 2,
    tileTextStyles: {
      fontSize: "68px",
      fill: "#7cebff",
    },
    tiles: [
      {
        text: "1",
        textStyle: {
          fill: "white",
        },
        fill: "#7cebff",
      },
      {
        text: "2",
        textStyle: {
          fill: "white",
        },
        fill: "#7cebff",
      },
      {
        text: "3",
        textStyle: {
          fill: "white",
        },
        fill: "#7cebff",
      },
      {
        text: "4",
        textStyle: {
          fill: "white",
        },
        fill: "#7cebff",
      },
    ],
  },
};
