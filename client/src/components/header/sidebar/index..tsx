import React from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar.scss';
import { links } from '../../../constants/linkData';
import { IonClickSideBar } from '../../../interfaces/interfaces';
import classNames from 'classnames';

const SideBar = (props: IonClickSideBar) => {
    return (
        <nav className={classNames(
            'side-bar',
            props.onClickDisplay ? 'side-bar-open' : null
        )}>
            <div className="close-container" onClick={props.onClickClose}>
                <div className="border-left"></div>
                <div className="border-right"></div>
                <label className="close">close</label>
            </div>
            <ul>
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
        </nav>
    );
};

export default SideBar;
