import { createGlobalStyle } from 'styled-components';
import SmokeLoader from './images/smoke-loader.webp';
import LightLoader from './images/light-loader.webp';
import BlizzardBg from './images/blizzard-bg.webp';
import StarcarfButtonBorder from './images/starcraft-border-button.png';

const GlobalStyles = createGlobalStyle`
  body {
    --dark-primary-color: #0B2B52;
    --dark-primary-color-ts: #0b2b5270;
    --primary-color: #0c3a71;
    --light-primary-color: #47557c;
    --light-primary-color-ts: #7785b729;
    --text-color: #f0f0f0;
    --light-text-color: #ffffff;
    --second-text-color: #131313;

    background-image: url('${BlizzardBg}');
    background-size: cover;
    background-repeat: no-repeat;
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
      filter: brightness(1.1);
      box-shadow: 3px 2px 10px 2px black;
    }
  }

  .bq_loader-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bq_light_loader {
    width: 100%;
    height: 100%;
    display: flex;
    background-image: url('${LightLoader}');
    background-size: contain;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    transform: scale(0.5);    
  }

  .bq_shadow_loader {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url('${SmokeLoader}');
  }

  .bq_blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(1px);
  }

  .bq_starcraft_border {
    box-shadow: 0 0 25px 15px #459aff6b;
    position: absolute;
    top: 0;
    left: 0;
    border-style: double;
    border-color: #45c1ff;
    border-width: 7px;
    width: 100%;
    height: 100%;
  }

  .bq_starcraft_button {
    position: relative;
    height: 35px;
    min-width: 130px;
    margin: 0px 15px;
    color: white;
    background: linear-gradient(180deg,#091217c2,rgb(24 83 142 / 61%));
    transition: all 200ms;

    &:hover {
      filter: brightness(1.3);
    }

    &:after {
      border-style: solid;
      border-width: 17px 60px;
      border-image: url('${StarcarfButtonBorder}') 17 60 repeat;
      border-image-outset: 14px;
      content: "";
      bottom: 0;
      display: block;
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

export default GlobalStyles;
