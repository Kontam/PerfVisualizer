import React from 'react';
import { Story, Meta } from '@storybook/react';

import Component, { Props } from '../LinkList';

export default {
  title: 'molecules/Headers/LinkList',
} as Meta;

const Template: Story<Props> = (args) => <Component {...args} />;

const data = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

export const Default: Story<Props> = Template.bind({});
Default.args = { links: data };
