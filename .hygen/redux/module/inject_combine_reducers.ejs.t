---
inject: true
to: src/redux/reducers.ts
after: "<%= section ? section : `const reducers = combineReducers`%>"
skip_if: <%= module%>,
---
<%= section ? `    ${module}` : `  ${module}`%>,