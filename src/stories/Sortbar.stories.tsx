import { Sortbar } from "../components/Sortbar";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
  title: "Driver/Sortbar",
  component: Sortbar,
} as ComponentMeta<typeof Sortbar>;

const Template: ComponentStory<typeof Sortbar> = (args: any) => (
  <Sortbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  parameters: ["Время", "Стоимость", "к510ат"],
  clickHandler: (parameter) => {
    console.log("Сортируем массив по " + parameter);
  },
};
