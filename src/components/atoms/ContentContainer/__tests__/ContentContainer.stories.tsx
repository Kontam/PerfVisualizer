import React from 'react';
import { Story, Meta } from '@storybook/react';

import Component from '../ContentContainer';

export default {
  title: 'atoms/ContentContainer',
} as Meta;

const Template: Story = (args) => <Component {...args} />;
const defaultArgs = {};

export const Default: Story = Template.bind({});
Default.args = { ...defaultArgs };
