import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { addPost } from '../../../actions/postActions';
import { setMessage } from '../../../actions/messageActions';
import { IEvent } from '../../../interfaces';
import Message from '../../../ui/message';
import { COLOR_VARIANTS } from '../../../constants/colorVariant';

import '../authForm.scss';

interface ILoginFormState {
    formData: {
        email: string;
        password: string;
    } | any;
    isMessageDisplay: boolean;
}

interface INewPostProps {
    // addPost: (newPost: IPostForm) => void;
    setMessage: (arg0: string, arg1: string) => void;
}

class LoginForm extends Component<INewPostProps, ILoginFormState> {
    state = {
        formData: {
            email: '',
            password: '',
        },
        isMessageDisplay: false
    }

    onChange = (e: IEvent) => {
        const { name, value } = e.target;

        this.setState(prevState => {
            const formData = Object.assign({}, prevState.formData);
            formData[name] = value;
            return { formData };
        });
    }

    onSubmit = async (e: IEvent) => {
        e.preventDefault();

        this.props.setMessage('ready to go', COLOR_VARIANTS.INFO);
    };

    messageClickHandler = () => {
        this.setState({ isMessageDisplay: false });
    }

    render() {
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

export default connect(null, { /* addPost,  */setMessage })(LoginForm);
