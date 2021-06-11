import React from 'react';
import { Story, Meta } from '@storybook/react';
import Component, { Props } from '../';
import { SupportIcon } from '@heroicons/react/outline';
import { LargeHeaderLink } from '../../../../types';

export default {
  title: 'molecules/Headers/LargeLinkList',
} as Meta;

const Template: Story<Props> = (args) => <Component {...args} />;

const data: LargeHeaderLink[] = [
  {
    id: 'test',
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    id: 'test',
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
];

export const Default: Story<Props> = Template.bind({});
Default.args = { largeLinks: data };
