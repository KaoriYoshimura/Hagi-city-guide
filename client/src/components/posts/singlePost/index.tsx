import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { fetchSinglePost } from '../../../actions/postActions';
import { IPost, IPostState } from '../../../interfaces';

import './singlePost.scss';

interface ISinglePostProps {
    fetchSinglePost: (id: string) => void;
    post: IPost;
    id: string;
}

class SinglePost extends Component<ISinglePostProps> {
    componentDidMount() {
        this.props.fetchSinglePost(this.props.id);
    }

    render() {
        const { post } = this.props;
        return (
            <article className="single-post-container">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-date">Created: <Moment format="DD/MM/YYYY">{post.date}</Moment></p>
                {post.updated === null
                    ? null : (
                        <p className="post-date">Updated: <Moment format="DD/MM/YYYY">{post.updated}</Moment></p>
                    )}
                <figure className="post-img">
                    <img
                        src={`/uploads/${post.image}`}
                        alt={post.title}
                    />
                </figure>
                <div className="post-description">
                    <p>{post.description}</p>
                </div>

            </article>
        );
    }
}

const mapStateToProps = (state: IPostState) => ({
    post: state.posts.post
});

export default connect(mapStateToProps, { fetchSinglePost })(SinglePost);
