import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';
import Truncate from 'react-truncate';
import { fetchPosts, deletePost } from '../../../actions/postActions';
import { IPosts, IPostsState, IPostsProps } from '../../../interfaces';
import reverseArray from '../../reverseArray';
import Label from '../../../ui/label';

import './postList.scss';

class PostList extends Component<IPostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;
        const postAray = reverseArray(posts);

        return (
            <div className={classNames('container', 'post-list-container')}>
                {/* Show table if there is post */}
                {posts.length > 0 ? (
                    postAray.map((post: IPosts) => (
                        <article
                            key={post._id}
                            className="post-container"
                        >
                            <div className="post-content">
                                <div className="image-container">
                                    <Link to={`/posts/${post._id}`}>
                                        <figure>
                                            <img src={`/uploads/${post.image}`
                                            } alt={post.title} />
                                        </figure>
                                        <Label variant={post.category.replace(/\s+/g, '-').toLowerCase()} className="label">{post.category}</Label>
                                    </Link>
                                </div>
                                <div className="text-container">
                                    <h2 className="post-title"><Link to={`/posts/${post._id}`}>{post.title}</Link></h2>
                                    <p className="post-date">Created: <Moment format="DD/MM/YYYY">{post.date}</Moment></p>
                                    {post.updated === null
                                        ? null : (
                                            <p className="post-date">Updated: <Moment format="DD/MM/YYYY">{post.updated}</Moment></p>
                                        )}
                                    <div className="post-description">
                                        <Truncate
                                            lines={5}
                                            ellipsis={<span>...</span>}
                                        >
                                            {post.description}
                                        </Truncate>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))
                ) : (
                        // Show message instead of table if there is no post
                        <p className="error-message">
                            Currently there is no post yet.
                            </p>
                    )}
            </div>
        );
    }
}

const mapStateToProps = (state: IPostsState) => ({
    posts: state.posts.posts
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostList);
