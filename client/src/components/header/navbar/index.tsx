import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../logo/logo';
import NavLinks from '../navLinks';

import './navbar.scss';


export interface INavBarProps {
    sideBarToggleClickHandler: any;
    isBlackVariant: boolean;
}

const Navbar = (props: INavBarProps) => (
    <header className={classNames('container', 'header')}>
        <nav
            className="navBar"
        >
            <div className="logo-container">
                <Logo blackVariant={props.isBlackVariant} />
            </div>
            <div className="spacer" />
            <FontAwesomeIcon
                icon={faBars}
                className={classNames(
                    'react-icon',
                    props.isBlackVariant ? 'blackVariant' : null
                )}
                onClick={props.sideBarToggleClickHandler}
            />
            <div className="nav-links">
                <NavLinks isBlackVariant={props.isBlackVariant} />
            </div>
        </nav >
    </header >
);
export default Navbar;
