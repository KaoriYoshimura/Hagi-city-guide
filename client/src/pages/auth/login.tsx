import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import EditPost from '../../components/posts/postForm/editPost';
import './auth.scss';
import Button from '../../ui/button';
import { IPostProps } from '../../interfaces';
import Header from '../../components/header';

class Login extends Component<IPostProps> {
    render() {
        return (
            <>
                <Header blackVariant />
                <main className={classNames('container', 'admin-container')}>
                    <EditPost id={this.props.match.params.id} />
                    <div className="link-container">
                        <Link to={'/'}>
                            <Button>Home</Button>
                        </Link>
                        <Link to={'/admin'}>
                            <Button>Admin top</Button>
                        </Link>
                    </div>
                </main>
            </>

        );
    }
}

export default Login;
