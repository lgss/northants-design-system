import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ServiceLandingPageExample, ServiceLandingPageExampleProps } from './ServiceLandingPageExample';

export default {
  title: 'Page Examples/Service Landing Page Examples',
  component: ServiceLandingPageExample,
} as Meta;

const Template: Story<ServiceLandingPageExampleProps> = (args) => <ServiceLandingPageExample {...args} />;

export const BinCollectionExample = Template.bind({});