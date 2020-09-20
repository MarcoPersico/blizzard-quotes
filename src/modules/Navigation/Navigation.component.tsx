import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '.';
import { NavigationProps } from '../../../typings/types';
import BrandImage from '../../assests/images/brand.webp';
import useWindowSize from '../../utils/useWindowSize';

const NavigationComponent = ({ onMenuClicked, isMenuVisible, onItemSelected }: NavigationProps) => {
  const size = useWindowSize();
  const renderLinkSections = () => (
    <>
      <li className="bq_navigation_menu_item">
        <Link to="/warcraft/1" onClick={onItemSelected}>
          Warcraft
    </Link>
      </li>
      <li className="bq_navigation_menu_item">
        <Link to="/starcraft/2" onClick={onItemSelected}>
          Starcraft
    </Link>
      </li>
      <li className="bq_navigation_menu_item">
        <Link to="/overwatch/3" onClick={onItemSelected}>
          Overwatch
    </Link>
      </li>
      <li className="bq_navigation_menu_item">
        <Link to="/diablo/4" onClick={onItemSelected}>
          Diablo
    </Link>
      </li>
      <li className="bq_navigation_menu_item">
        <Link to="/" onClick={onItemSelected}>
          Random
    </Link>
      </li>
    </>
  );

  return (
    <Navigation.Styles>
      <div className="bq_navigation">
        <div className="bq_navigation_brand">
          <img src={BrandImage} width="32" height="32" />
          <span className="bq_title">Blizzard Quotes</span>
        </div>
        <div className="bq_navigation_actions">
          {size.width > 1024
            ? <ul className="bq_navigation_menu">{renderLinkSections()}</ul>
            : (
              <button onClick={onMenuClicked} className="bq_navigation_actions_hamburguer">
                <span role="image">☰</span>
              </button>
            )}
        </div>
        {size.width > 1024
          ? null
          : (
            <ul className={`bq_navigation_menu ${isMenuVisible ? '--uncollapse' : '--collapse'}`}>
              {renderLinkSections()}
            </ul>
          )}
      </div>
    </Navigation.Styles>
  );
};

export default NavigationComponent;
