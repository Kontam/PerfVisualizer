---
inject: true
to: src/redux/types.ts
after: // module types
skip_if: <%= module%>
---

export type <%= h.inflection.classify(module)%> = {
  // generated by hygen
};
