import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TextControl } from "../components/TextControl";

export default {
  title: "Common/TextControl",
  component: TextControl,
} as ComponentMeta<typeof TextControl>;

const Template: ComponentStory<typeof TextControl> = (args: any) => (
  <TextControl {...args} />
);

export const Login = Template.bind({});
Login.args = {
  type: "text",
  placeholder: "Номер телефона",
  valueChange: (value: string) => console.log(value),
};
