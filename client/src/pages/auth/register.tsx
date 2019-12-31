import React from 'react';
import classNames from 'classnames';

import RegisterForm from '../../components/auth/registerForm';
import './auth.scss';
import Header from '../../components/header';


const Register = () => (
    <>
        <Header blackVariant />
        <main className={classNames('container', 'admin-container')}>
            <RegisterForm />
        </main>
    </>

);

export default Register;
