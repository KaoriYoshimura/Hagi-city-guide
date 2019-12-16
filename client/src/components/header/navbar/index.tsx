import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { links } from '../../../constants/linkData';
import Logo from '../../logo/logo';

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
            <ul className="navMenus">
                {links.map(link => {
                    return (
                        <li
                            className={classNames(props.isBlackVariant ? 'blackVariant' : null)}
                            key={link.id}
                        >
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
