import { createGlobalStyle } from 'styled-components';

const Animations = createGlobalStyle`
  .--collapse {
    transition: all 400ms;
    opacity: 0;
    transform-origin: top;
    transform: scaleY(0);
  }

  .--uncollapse {
    transition: all 400ms;
    transform-origin: top;
    transform: scaleY(1);
  }

  .smoking {
    animation: smoking 40000ms infinite alternate;
  }

  .smoking-loader {
    animation: smoking 10000ms infinite alternate;
  }

  .fadeIn {
    animation: fadeIn 1200ms forwards;
    z-index: 100000;
  }

  .fadeOut {
    animation: fadeOut 1200ms forwards;
    display: hidden;
    z-index: 1;    
  }

  .glow {
    animation: glow 8000ms infinite alternate;
  }

  .flash {
    animation: flash 3000ms forwards;
  }

  .flash-ow {
    animation: flash-ow 3000ms forwards;
  }

  .neon {  
    animation: neon 4500ms ease-in-out infinite alternate;
  }

  @keyframes smoking {
    from { background-size: 100% 200%}
    to { background-size: 100% 100% }
  }

  @keyframes fadeIn {
    from { opacity: 0 }
    to { opacity: 1 }
  }

  @keyframes fadeOut {
    from { opacity: 1 }
    to { opacity: 0 }
  }

  @keyframes glow {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .25;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes flash {
    0% { box-shadow: inset 0px 0px 7px 3px #2689ff; }
    100% { box-shadow: inset 0px 0px 250px 120px #2689ff; }
  }

  @keyframes flash-ow {
    0% { box-shadow: inset 0px 0px 7px 3px #fff; }
    100% { box-shadow: inset 0px 0px 250px 120px #fff; }
  }

  @keyframes neon {
  0% {
    box-shadow:
    0 0 2px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(30,132,242,0.52),
    0 0 21px rgba(30,132,242,0.92),
    0 0 34px rgba(30,132,242,0.78),
    0 0 54px rgba(30,132,242,0.92);
  }
  50% {
    box-shadow:
    0 0 6px rgba(202,228,225,0.98),
    0 0 30px rgba(202,228,225,0.42),
    0 0 12px rgba(30,132,242,0.58),
    0 0 22px rgba(30,132,242,0.84),
    0 0 38px rgba(30,132,242,0.88),
    0 0 60px rgba(30,132,242,1);
  }
  100% {
    box-shadow:
    0 0 2px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(30,132,242,0.52),
    0 0 21px rgba(30,132,242,0.92),
    0 0 34px rgba(30,132,242,0.78),
    0 0 54px rgba(30,132,242,0.92);
  }
}
`;

export default Animations;
