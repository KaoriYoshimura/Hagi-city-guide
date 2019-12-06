import React from 'react';
import classNames from 'classnames';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { links } from '../../../constants/linkData';
import { INavBarProps } from '../../../interfaces/interfaces';
import Logo from '../../logo/logo';

const Navbar = (props: INavBarProps) => (
    <header className={classNames('container', 'header')}>
        <nav
            className="navBar"
        >
            <div className={'logo-container'} >
                <Logo />
            </div>
            <div className="spacer" />
            <FontAwesomeIcon
                icon={faBars}
                className="react-icon"
                onClick={props.sideBarToggleClickHandler}
            />
            <ul className="navMenus">
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink
                                to={link.path}
                                exact
                            >
                                {link.text}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav >
    </header>
);
export default Navbar;
