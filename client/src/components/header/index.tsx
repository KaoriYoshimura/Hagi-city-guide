import React, { Component } from 'react';

import Navbar from './navbar';
import SideBar from './sidebar';
import BackDrop from '../../ui/backDrop/backDrop';
import { IBlackVariantProps } from '../../interfaces';


interface IisSideBarOpen {
    isSideBarOpen: boolean;
}

class Header extends Component<IBlackVariantProps, IisSideBarOpen> {
    state = {
        isSideBarOpen: false,
    }

    sideBarToggleClickHandler = () => {
        this.setState(prevState => {
            return { isSideBarOpen: !prevState.isSideBarOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ isSideBarOpen: false });
    }

    render() {
        let backDrop = null;

        if (this.state.isSideBarOpen) {
            backDrop = <BackDrop onClickClose={this.backdropClickHandler} />;
        }
        return (
            <>
                <Navbar
                    sideBarToggleClickHandler={this.sideBarToggleClickHandler}
                    isBlackVariant={this.props.blackVariant}
                />
                <SideBar
                    onClickClose={this.backdropClickHandler}
                    onClickDisplay={this.state.isSideBarOpen}
                />
                {backDrop}
            </>
        );
    }
}

export default Header;
