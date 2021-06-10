---
to: src/redux/modules/<%= module%>.ts 
---

import { createAction, handleActions } from 'redux-actions';

export const INITIAL_STATE = [{}];

<% actions.forEach((action) => {-%>
const <%= action  %> = '<%= action%>';
<% });-%>

<% actions.forEach((action) => {-%>
export const <%= h.inflection.camelize(action.toLowerCase(), true) %> = createAction(<%= action%>);
<% });-%>

export const <%= module%> = handleActions<any>(
  {
<% actions.forEach((action) => {-%>
    ['<%= action%>']: () => {
      return {};
    },
<% });-%>
  },
  INITIAL_STATE
);
