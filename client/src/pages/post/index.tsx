import React, { Component } from 'react';
import classNames from 'classnames';

import Header from '../../components/header/header';
import SinglePost from '../../components/posts/singlePost';
import { IPostProps } from '../../interfaces/interfaces';


class Post extends Component<IPostProps> {
    render() {
        return (
            <>
                <Header />
                <main className={classNames('container', 'posts')}>
                    <SinglePost id={this.props.match.params.id} />
                </main>
            </>
        );
    }
}

export default Post;
