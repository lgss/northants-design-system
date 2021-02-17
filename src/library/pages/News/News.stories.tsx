import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { News, NewsProps }  from "./News";

export default {
  title: 'Page Examples/News example',
  component: News,
} as Meta;

const Template: Story<NewsProps> = (args) => <News {...args} />;

export const ExampleNews = Template.bind({});    
