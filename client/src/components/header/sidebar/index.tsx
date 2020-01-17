import React from 'react';
import classNames from 'classnames';
import { IonClickSideBar } from '../../../interfaces/header';
import NavLinks from '../navLinks';
import './sidebar.scss';

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
            <NavLinks isBlackVariant={true} />
        </nav>
    );
};

export default SideBar;
