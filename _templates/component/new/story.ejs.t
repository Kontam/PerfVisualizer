---
to: <%= component%>/__tests__/<%= component%>.stories.tsx
---

import React from 'react';
import { Story, Meta } from '@storybook/react';

import Component, { Props } from '../<%= component%>';

export default {
  title: '<%= cwd%>',
} as Meta;

const Template: Story<Props> = (args) => <Component {...args} />;
const defaultArgs = {};

export const Default: Stroy<Props> = Template.bind({});
Default.args = { ...defaultArgs };
