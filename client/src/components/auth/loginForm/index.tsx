import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../../actions/authActions';
import { setMessage } from '../../../actions/messageActions';
import { IEvent } from '../../../interfaces';
import Message from '../../../ui/message';

import '../authForm.scss';

interface ILoginFormState {
    formData: {
        email: string;
        password: string;
    } | any;
    isMessageDisplay: boolean;
}

interface INewPostProps {
    login: (email: string, password: string) => void;
    setMessage: (arg0: string, arg1: string) => void;
    isAuthenticated: boolean;
}

class LoginForm extends Component<INewPostProps, ILoginFormState> {
    state = {
        formData: {
            email: '',
            password: '',
        },
        isMessageDisplay: false,
    }

    onChange = (e: IEvent) => {
        const { name, value } = e.target;

        this.setState(prevState => {
            const formData = Object.assign({}, prevState.formData);
            formData[name] = value;
            return { formData };
        });
    }

    onSubmit = (e: IEvent) => {
        e.preventDefault();
        const { email, password } = this.state.formData;
        this.props.login(email, password);
    };

    messageClickHandler = () => {
        this.setState({ isMessageDisplay: false });
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/admin" />;
        }

        return (
            <div className="auth-form-container">
                <form className="auth-form" onSubmit={this.onSubmit}>
                    <div>
                        <label>Email <span className="required">&#42;</span></label>
                        <input type="email" className="input-field" name="email" placeholder="Please enter email address" onChange={this.onChange} required />
                    </div>
                    <div>
                        <label>Password <span className="required">&#42;</span></label>
                        <input type="password" className="input-field" name="password" placeholder="Please enter password" onChange={this.onChange} required />
                    </div>
                    <div>
                        <input type="submit" value="Log in" />
                    </div>
                </form>
                <p className="text">
                    Create a new account?<Link to="/register">Register</Link>
                </p>
                <Message />
            </div>
        );
    }
}

const mapStateToProps = (state: { auth: { isAuthenticated: boolean } }) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, setMessage })(LoginForm);
