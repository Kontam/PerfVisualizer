---
inject: true
to: src/redux/reducers.ts
after: from 'redux';
skip_if: from './modules/<%= module%>'
---
import { <%= module%> } from './modules/<%= module%>';