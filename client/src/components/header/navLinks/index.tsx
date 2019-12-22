import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './navLinks.scss';

export interface INavBarProps {
    isBlackVariant: boolean;
}

const NavLinks = (props: INavBarProps) => (
    <ul className={classNames(
        'nav-links-container',
        props.isBlackVariant ? 'blackVariant' : null
    )}>
        <li>
            <NavLink to={'/'} exact>top</NavLink>
        </li>
        <li>
            <NavLink to={'/posts'} exact>posts</NavLink>
        </li>
        <li>
            <a href={'http://www.hagishi.com/en/access/'} target="_blank" rel="noopener noreferrer">
                access
            </a>
        </li>
        <li>
            <NavLink to={'/admin'} exact>admin</NavLink>
        </li>
        <li>
            <a href="mailto: info@hagi.com">contact</a>
        </li>
    </ul>
);

export default NavLinks;
