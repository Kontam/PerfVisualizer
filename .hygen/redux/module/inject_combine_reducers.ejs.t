---
inject: true
to: src/redux/reducers.ts
after: const reducers = combineReducers
skip_if: <%= module%>,
---
  <%= module%>,