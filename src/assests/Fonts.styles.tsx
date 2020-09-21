import { createGlobalStyle } from 'styled-components';

import Satisty from './font/Satisfy-Regular.ttf';
import Lifecraft from './font/LifeCraft_Font.ttf';

const Fonts = createGlobalStyle`
@font-face {
  font-family: 'Lifecraft';
  src: url('${Lifecraft}') format('truetype');
} 

@font-face {
  font-family: 'Satisfy';
  src: url('${Satisty}') format('truetype');
} 
`;

export default Fonts;
