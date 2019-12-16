import React, { Component } from 'react';
import classNames from 'classnames';

import Header from '../../components/header';
import SinglePost from '../../components/posts/singlePost';
import { IPostProps } from '../../interfaces';
import Footer from '../../components/footer';


class Post extends Component<IPostProps> {
    render() {
        return (
            <>
                <Header blackVariant />
                <main className={classNames('container', 'posts')}>
                    <SinglePost id={this.props.match.params.id} />
                </main>
                <Footer />
            </>
        );
    }
}

export default Post;
