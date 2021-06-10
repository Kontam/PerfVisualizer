---
to: src/redux/modules/<%= module%>.ts 
---
<% const typeName= h.inflection.capitalize(module);-%>
import { createAction, handleActions } from 'redux-actions';
import { <%= typeName%> } from '../types';

export const INITIAL_STATE: <%= typeName%> = [{}];

<% actions.forEach((action) => {-%>
const <%= action  %> = '<%= action%>';
<% });-%>

<% actions.forEach((action) => {-%>
export const <%= h.inflection.camelize(action.toLowerCase(), true) %> = createAction(<%= action%>);
<% });-%>

export const <%= module%> = handleActions<<%=typeName %>, any>(
  {
<% actions.forEach((action) => {-%>
    ['<%= action%>']: () => {
      return {};
    },
<% });-%>
  },
  INITIAL_STATE
);
