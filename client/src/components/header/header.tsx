import React, { Component } from 'react';

import { IisSideBarOpen } from '../../interfaces/interfaces';
import Navbar from '../../components/header/navbar/navbar';
import SideBar from '../../components/header/sidebar/sidebar';
import BackDrop from '../../ui/backDrop/backDrop';

class Header extends Component<{}, IisSideBarOpen> {
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
                <Navbar sideBarToggleClickHandler={this.sideBarToggleClickHandler} />
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
