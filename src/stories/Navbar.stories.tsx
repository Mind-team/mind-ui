import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Navbar, NavbarElement } from "..";

export default {
  title: "Common/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args: any) => (
  <Navbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <NavbarElement>Главная</NavbarElement>
      <NavbarElement>История</NavbarElement>
      <NavbarElement>Парковки</NavbarElement>
      <NavbarElement>Профиль</NavbarElement>
    </>
  ),
};
