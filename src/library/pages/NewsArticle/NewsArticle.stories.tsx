import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { NewsArticle, NewsArticleProps }  from "./NewsArticle";

export default {
  title: 'Page Examples/News Article example',
  component: NewsArticle,
} as Meta;

const Template: Story<NewsArticleProps> = (args) => <NewsArticle {...args} />;

export const ExampleNewsArticle = Template.bind({});    

export const ExampleNewsArticleWithImage = Template.bind({});    
ExampleNewsArticleWithImage.args = {
  withImage: "https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg",
  imagePlaceholder: "https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/144/81/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg"
}

export const ExampleNewsArticleThatIsOld = Template.bind({});    
ExampleNewsArticleThatIsOld.args = {
  isOld: true
}