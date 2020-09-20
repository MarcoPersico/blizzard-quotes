import { createGlobalStyle } from 'styled-components';
import SmokeLoader from './images/smoke-loader.webp';

const GlobalStyles = createGlobalStyle`
  body {
    --dark-primary-color: #0B2B52;
    --primary-color: #0c3a71;
    --light-primary-color: #47557c;
    --lighter-primary-color: #7785b7;
    --text-color: #f0f0f0;
    --light-text-color: #ffffff;
    --second-text-color: #131313;

    background-color: var(--primary-color);
  }

  * {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;
    background: none;
    border: none;
    text-decoration: none;
    padding: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .bq_title {
    font-size: 1.25rem;
  }

  .bq_section {
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .bq_wow_button {
    z-index: 50000;
    color: #D4B242;
    min-width: 140px;
    height: 30px;
    font-size: 1.05rem;
    border-radius: 5px;
    border: 4px double;
    border-color: #131313;
    box-shadow: 3px 2px 10px 0px black;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    background: linear-gradient(to bottom, rgba(107,22,10,1) 0%, rgb(128 3 3) 50%, rgb(62 11 4) 100%);
    transition: all 200ms;

    &:hover {
      opacity: 0.9;
      box-shadow: 3px 2px 10px 2px black;
    }
  }

  .bq_shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &_loader {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-image: url('${SmokeLoader}');
    }
  }
`;

export default GlobalStyles;
