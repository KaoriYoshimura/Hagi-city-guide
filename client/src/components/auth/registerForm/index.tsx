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

interface IRegisterFormState {
    formData: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    } | any;
    isMessageDisplay: boolean;
}

interface INewPostProps {
    // addPost: (newPost: IPostForm) => void;
    setMessage: (arg0: string, arg1: string) => void;
}

class RegisterForm extends Component<INewPostProps, IRegisterFormState> {
    state = {
        formData: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
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

        const { name, email, password, confirmPassword } = this.state.formData;
        if (password === confirmPassword) {
            const newUser = {
                name,
                email,
                password
            };

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                const body = JSON.stringify(newUser);

                const res = await axios.post('/api/users', body, config);
                console.log(res.data);
            } catch (err) {
                console.error(err.response);
            }

            this.props.setMessage('ready to go', COLOR_VARIANTS.INFO);
        } else {
            this.props.setMessage('Password do not match.', COLOR_VARIANTS.DANGER);
        }
    };

    messageClickHandler = () => {
        this.setState({ isMessageDisplay: false });
    }

    render() {
        return (
            <div className="auth-form-container">
                <form className="auth-form" onSubmit={this.onSubmit}>
                    <div>
                        <label>Name <span className="required">&#42;</span></label>
                        <input type="text" className="input-field" name="name" placeholder="Please enter your name" onChange={this.onChange} required />
                    </div>
                    <div>
                        <label>Email <span className="required">&#42;</span></label>
                        <input type="email" className="input-field" name="email" placeholder="Please enter email address" onChange={this.onChange} required />
                    </div>
                    <div>
                        <label>Password <span className="required">&#42;</span></label>
                        <input type="password" className="input-field" name="password" placeholder="Please enter password" onChange={this.onChange} required />
                    </div>
                    <div>
                        <label>Confirm Password <span className="required">&#42;</span></label>
                        <input type="password" className="input-field" name="confirmPassword" placeholder="Please enter password again" onChange={this.onChange} required />
                    </div>
                    <div>
                        <input type="submit" value="Sign up" />
                    </div>
                </form>
                <p className="text">
                    Have a account?<Link to="/login">Log in</Link>
                </p>
                <Message />
            </div>
        );
    }
}

export default connect(null, { /* addPost,  */setMessage })(RegisterForm);
