import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ParkingWidget } from "../components/ParkingWidget";

export default {
  title: "Driver/ParkingWidget",
  component: ParkingWidget,
} as ComponentMeta<typeof ParkingWidget>;

const Template: ComponentStory<typeof ParkingWidget> = (args: any) => (
  <ParkingWidget {...args} />
);

export const MiniCompleted = Template.bind({});
MiniCompleted.args = {
  size: "mini",
  data: {
    parkingName: "Гринвич",
    date: new Date(),
    price: 100,
    detailsClick: () => {},
  },
};

export const MiniUncompleted = Template.bind({});
MiniUncompleted.args = {
  size: "mini",
  data: {
    price: 100,
    detailsClick: () => {},
  },
};

export const Long = Template.bind({});
Long.args = {
  size: "long",
  data: {
    parkingName: "Гринвич",
    date: new Date(),
    price: 100,
    detailsClick: () => {},
  },
};
