import React from "react";
import NewsArticleDate from "./NewsArticleDate";
import { NewsArticleDateProps } from "./NewsArticleDate.types";
import { Story } from '@storybook/react/types-6-0';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Structure/News Article Date',
    component: NewsArticleDate
};

const Template: Story<NewsArticleDateProps> = (args) => <SBPadding><MaxWidthContainer><NewsArticleDate {...args} /></MaxWidthContainer></SBPadding>;

export const Example = Template.bind({});
Example.args = {
  text: "Example News Article Date"
};
