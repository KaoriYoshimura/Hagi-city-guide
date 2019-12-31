import React from 'react';
import classNames from 'classnames';

import LoginForm from '../../components/auth/loginForm';
import './auth.scss';
import Header from '../../components/header';

const Login = () => (
    <>
        <Header blackVariant />
        <main className={classNames('container', 'admin-container')}>
            <LoginForm />
        </main>
    </>
);

export default Login;
