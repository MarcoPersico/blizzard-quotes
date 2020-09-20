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
`;

export default Animations;
