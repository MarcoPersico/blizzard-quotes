import styled from 'styled-components';
import smokeBG from '../../assests/images/quote-bg.webp';
import smokeLoader from '../../assests/images/smoke.webp';

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
    url('${smokeBG}'),
    radial-gradient(
      ellipse at center,
      rgba(255,244,217,1) 0%,
      rgb(218 209 187) 26%,
      rgb(158 147 122) 60%,
      rgb(99 89 67) 82%,
      rgb(29 27 22) 100%
    );

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
      background-image: url('${smokeLoader}');
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
        font-family: 'Satisfy', cursive;
      }

      .author {
        padding-top: 1rem;
        text-align: right;
        font-style: italic;
        font-weight: bold;
        font-size: 1.25rem;
      }

      .quote {
        text-align: center;
        font-size: 1.45rem;
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
