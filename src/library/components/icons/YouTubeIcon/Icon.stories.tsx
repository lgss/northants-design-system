
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Icon from "./Icon";
import { IconProps } from "../services/Icon.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/YouTube',
  component: Icon
};

const Template: Story<IconProps> = (args) => <SBPadding><Icon {...args} /></SBPadding>;

export const ExampleIcon = Template.bind({});    
ExampleIcon.args = {
  colourFill: "#111"
};
