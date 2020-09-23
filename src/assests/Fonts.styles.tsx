import { createGlobalStyle } from 'styled-components';

import Satisty from './font/Satisfy-Regular.ttf';
import Lifecraft from './font/LifeCraft_Font.ttf';
import Starcraft from './font/Starcraft Normal.ttf';
import Euro from './font/Euro.ttf';
import Overwatch from './font/Overwatch.ttf';

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
  font-family: 'Euro';
  src: url('${Euro}') format('truetype');
} 

@font-face {
  font-family: 'Overwatch';
  src: url('${Overwatch}') format('truetype');
}
`;

export default Fonts;
