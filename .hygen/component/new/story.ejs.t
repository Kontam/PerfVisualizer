---
to: <%= path%>/<%= component%>/__tests__/<%= component%>.stories.tsx
---

import React from 'react';
import { Story, Meta } from '@storybook/react';

import Component, { Props } from '../<%= component%>';

export default {
  title: '<%= category%>/<%= component%>',
} as Meta;

const Template: Story<Props> = (args: Props) => <Component {...args} />;
const defaultArgs = {};

export const Default: Story<Props> = Template.bind({});
Default.args = { ...defaultArgs };
