import styled from 'styled-components';
import Lifecraft from '../../assests/font/LifeCraft_Font.ttf';
import custombh from '../../assests/images/quote-bg.webp';
import custommbh from '../../assests/images/smoke.webp';

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 100;

  width: 95%;
  height: 80%;
  padding: 0 1rem;
  border: 4px double black;

  background: var(--text-color);
  background-size: cover;
  color: var(--second-text-color);
  background-image:
    url('${custombh}'),
    radial-gradient(
      ellipse at center,
      rgba(255,244,217,1) 0%,
      rgb(218 209 187) 26%,
      rgb(158 147 122) 60%,
      rgb(99 89 67) 82%,
      rgb(29 27 22) 100%
    );

  @font-face {
    font-family: 'Lifecraft';
    src: url('${Lifecraft}') format('truetype');
  }

  .bq_card {
    &_smoke {
      opacity: .75;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position-x: 50%;
      z-index: 10;
      background-image: url('${custommbh}');
    }

    &_header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15%;
      border-bottom: 4px double;
      padding: 2rem 0 1rem;
      z-index: 1000;

      h2 { 
        font-family: 'Lifecraft', cursive;
        font-size: 2rem;
      }
    }

    &_body {
      height: 70%;
      border-bottom: 4px double;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;

      &_quote {
        font-family: 'Amatic SC', cursive;
        font-size: 1.75rem;
        font-weight: bold;
      }

      .author {
        padding-top: 1rem;
        text-align: right;
        font-weight: bold;
        font-style: italic;
      }

      .quote {
        padding: 0 1rem;
        text-align: center;
      }
    }

    &_footer {
      display: flex;
      align-items: center;
      height: 15%;
      padding: 1rem 0;
      z-index: 1000;

      &_action-group {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 75%;
    height: 60%;

    .bq_card_footer {
      justify-content: flex-end;

      &_action-group {
        width: 50%;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    width: 50%;
    height: 60%;
  }

  @media screen and (min-width: 1440px) {
    width: 45%;
    height: 60%;

    .bq_card_footer {
      justify-content: flex-end;

      &_action-group {
        width: 40%;
      }
    }
  }
`;

export default CardStyles;
