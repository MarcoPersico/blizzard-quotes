import { createGlobalStyle } from 'styled-components';

import Satisty from './font/Satisfy-Regular.ttf';
import Lifecraft from './font/LifeCraft_Font.ttf';
import Starcraft from './font/Starcraft Normal.ttf';
import Euro from './font/Euro.ttf';

const Fonts = createGlobalStyle`
@font-face {
  font-family: 'Lifecraft';
  src: url('${Lifecraft}') format('truetype');
} 

@font-face {
  font-family: 'Satisfy';
  src: url('${Satisty}') format('truetype');
} 

@font-face {
  font-family: 'Starcraft';
  src: url('${Starcraft}') format('truetype');
} 

@font-face {
  font-family: 'Arcade';
  src: url('${Euro}') format('truetype');
} 
`;

export default Fonts;
