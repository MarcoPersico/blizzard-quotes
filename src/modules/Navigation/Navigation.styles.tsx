import styled from 'styled-components';

const NavigationStyles = styled.header`
  height: 70px;
  padding: 0 1rem;
  width: 100%;
  background-color: var(--dark-primary-color-ts);
  border-bottom: 1px solid var(--light-primary-color);
  position: relative;
  color: var(--text-color);

  .bq_navigation {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_brand {
      display: flex;
      align-items: center;

      * {
        margin-right: 0.5rem;
      }
    }

    &_actions {
      &_hamburguer {
        color: var(--text-color);
        width: 32px;
        height: 32px;
        border-radius: 4px;
        transition: all 200ms;

        span {
          font-size: 1.25rem;
        }

        &:focus {
          outline: var(--light-primary-color) auto 1px;
        }

        &:hover {
          background-color: var(--light-primary-color-ts);
        }
      }
    }

    &_menu {
      position: absolute;
      top: 70px;
      left: 0;
      height: calc(100vh - 70px);
      width: 100%;
      background-color: var(--dark-primary-color);
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      z-index: 1000000;

      &_item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        border-bottom: 1px solid var(--light-primary-color);
        cursor: pointer;

        a {
          color: var(--text-color);
          width: 100%;
          height: 100%;

          &:focus {
            outline: none;
          }
        }
      }
    }
    
    @media screen and (min-width: 1024px) {
      &_menu {
        background-color: transparent;
        position: relative;
        width: 100%;
        height: 70px;
        display: flex;
        top: 0;
        flex-direction: row;
        border-bottom: 1px solid var(--light-primary-color);

        &_item {
          border-bottom: none;
          padding: 0 10px;
          transition: all 200ms;
          height: 100%;
          min-width: 100px;

          &:hover {
            background-color: var(--light-primary-color-ts);
          }
        }        
      }
    }
  }
`;

export default NavigationStyles;
