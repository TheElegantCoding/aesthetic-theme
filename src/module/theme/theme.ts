import { global } from './component/global';
import { common } from './syntax/common';
import { css } from './syntax/css';
import { jsTs } from './syntax/js_ts';
import { json } from './syntax/json';
import { markdown } from './syntax/markdown';

const theme = {
  colors: {
    ...global
  },
  name: 'Aesthetic\'s Theme',
  tokenColors: [
    ...jsTs,
    ...common,
    ...css,
    ...json,
    ...markdown
  ],
  type: 'dark'
};

export { theme };