import styled from 'styled-components';
import OverwatchCardBg from '../../assests/images/overwatch-card-bg.webp';
import OWBar from '../../assests/images/ow-bar.webp';

const OverwatchCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 100;

  width: 95%;
  height: 80%;
  padding: 0 1rem;
  color: var(--text-color);
  background-position: 50%;
  background-size: 80%;
  background-repeat: no-repeat;
  background-color: var(--dark-primary-color-ts);
  background-image: url('${OverwatchCardBg}');

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
        font-family: 'Overwatch', cursive;
        font-style: italic;
        font-size: 2.25rem;
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
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      
      &_quote {
        font-family: 'Overwatch', cursive;
      }

      .author {
        padding-top: 1.25rem;
        text-align: right;
        font-size: 1.3rem;
      }

      .quote {
        text-align: center;
        font-size: 1.75rem;
      }
    }

    &_footer {
      display: flex;
      align-items: center;
      height: 15%;
      padding: 0.5rem 0 1.5rem;
      z-index: 1000;
      background-image: url('${OWBar}');
      background-size: 100%;
      background-position: 100% -200%;
      background-repeat: no-repeat;

      &_action-group {
        width: 100%;
        display: flex;
        justify-content: space-between;

        a:first-child {
          height: 35px;
          width: 150px;
          background: #3996d5b8;
          color: white;
          transform: skew(-15deg);
        }
        button:last-child {
          height: 35px;
          width: 150px;
          background: #f99e1a9e;
          color: white;
          transform: skew(-15deg);
        }
      }
    }

    &_ow {
      &_highlight {
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 100%;
        height: 10%;
        border-bottom: 0.4rem solid #f99e1a;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 75%;
    height: 60%;
    background-position-y: 10%;
    background-size: 50%;

    .bq_card_footer {
      justify-content: flex-end;
      background-size: 65%;
      background-position: 45% 85%;

      &_action-group {
        width: 50%;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    width: 55%;
    height: 70%;
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

export default OverwatchCardStyles;
