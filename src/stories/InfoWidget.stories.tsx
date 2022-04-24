import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { GradientBackground, InfoWidget } from "../components/InfoWidget";

export default {
  title: "Common/InfoWidget",
  component: InfoWidget,
} as ComponentMeta<typeof InfoWidget>;

const Template: ComponentStory<typeof InfoWidget> = (args: any) => (
  <InfoWidget {...args} />
);

export const Mini = Template.bind({});
Mini.args = {
  size: "mini",
  data: {
    leftSideContent: "Ваша карта:",
    rightSideContent: "8840",
  },
};

export const Round = Template.bind({});
Round.args = {
  size: "round",
  data: {
    text: "Русский язык",
    gradientBackground: GradientBackground.RedNBlue,
  },
  click: () => console.log("Click"),
};
