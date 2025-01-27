
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import ChevronIcon from "./ChevronIcon";
import { ChevronIconProps } from "./ChevronIcon.types";
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Chevron',
  component: ChevronIcon
};

const Template: Story<ChevronIconProps> = (args) => <SBPadding><ChevronIcon {...args} /></SBPadding>;

export const DownChevronIcon = Template.bind({});    
DownChevronIcon.args = {
  colourFill: "#333",
  direction: "down"
};

export const LeftChevronIcon = Template.bind({});    
LeftChevronIcon.args = {
  colourFill: "#333",
  direction: "left"
};

export const UpChevronIcon = Template.bind({});    
UpChevronIcon.args = {
  colourFill: "#333",
  direction: "up"
};

export const RightChevronIcon = Template.bind({});    
RightChevronIcon.args = {
  colourFill: "#333",
  direction: "right"
};
