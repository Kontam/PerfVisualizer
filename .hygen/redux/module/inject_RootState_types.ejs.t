---
inject: true
to: src/redux/RootStateType.ts
after: "<%= section ? section : `export type RootState =`%>"
---
<% const str = `${module}: ${h.inflection.classify(module)};`;-%>
<%= section ? `    ${str}` : `  ${str}`%>