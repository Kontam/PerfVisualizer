---
inject: true
to: src/redux/RootStateType.ts
after: import {
---
  <%=h.inflection.capitalize(module) %>,