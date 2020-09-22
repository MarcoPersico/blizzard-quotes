import styled from 'styled-components';
import CircuitBg from '../../assests/images/circuit-bg.png';

const StarcraftCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 100;

  width: 95%;
  height: 80%;
  padding: 0 1rem;
  background-image: url('${CircuitBg}');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0px 0px 15px 5px #2689ff;
  background-color: #00000036;
  color: var(--text-color);

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
    }

    &_header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15%;
      padding: 2rem 0 1rem;
      z-index: 1000;

      h2 { 
        font-family: 'Starcraft',cursive;
        font-size: 1.45rem;
        color: #2eb2ff;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      }
    }

    &_body {
      height: 70%;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      color: #a9e2ff;
      text-shadow: -2px -2px 0 #000, 1px 3px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      font-weight: bold;
      
      &_quote {
        font-family: 'Arcade', cursive;
      }

      .author {
        padding-top: 1rem;
        text-align: right;
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
      padding: 0.5rem 0 1.5rem;
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
    background-position-y: 10%;

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

export default StarcraftCardStyles;
