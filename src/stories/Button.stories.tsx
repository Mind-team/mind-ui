import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../components/Button";

export default {
  title: "Common/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Login = Template.bind({});
Login.args = {
  title: "Войти",
  click: () => console.log(),
};
