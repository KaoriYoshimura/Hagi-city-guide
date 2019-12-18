import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, editPost } from '../../../actions/postActions';
import { IPosts } from '../../../interfaces';
import Moment from 'react-moment';


import './singlePost.scss';

interface IEditPostsProps {
    fetchSinglePost: any;
    editPost: any;
    post: IPosts;
    id: string;
}

class SinglePost extends Component<IEditPostsProps> {
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

const mapStateToProps = (state: any) => ({
    post: state.posts.post
});

export default connect(mapStateToProps, { fetchSinglePost, editPost })(SinglePost);
