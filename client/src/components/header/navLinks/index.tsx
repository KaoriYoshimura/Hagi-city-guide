import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../actions/authActions';
import { IAuthInitialState } from '../../../interfaces/auth';

import './navLinks.scss';

export interface INavBarProps {
    isBlackVariant: boolean;
    auth: IAuthInitialState;
    logout: () => void;
}

class NavLinks extends Component<INavBarProps> {
    render() {
        const { isAuthenticated, loading } = this.props.auth;

        return (


            <ul className={classNames(
                'nav-links-container',
                this.props.isBlackVariant ? 'blackVariant' : null
            )}>
                <li>
                    <NavLink to={'/'} exact>top</NavLink>
                </li>
                <li>
                    <NavLink to={'/posts'} exact>posts</NavLink>
                </li>
                <li>
                    <a href="mailto: info@hagi.com">contact</a>
                </li>
                {!loading && (
                    <>
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <NavLink to={'/admin'} exact>Admin</NavLink>
                                </li>
                                <li>
                                    <a onClick={this.props.logout} href="#!" className="login">Logout</a>
                                </li>
                            </>
                        ) : (
                                <li>
                                    <NavLink to={'/login'} exact className="login">Login</NavLink>
                                </li>
                            )}
                    </>
                )}
            </ul>
        );
    }
}

const mapStateToProps = (state: { auth: IAuthInitialState }) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavLinks);
