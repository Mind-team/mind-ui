import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { InfoWidget } from "../components/InfoWidget";

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
