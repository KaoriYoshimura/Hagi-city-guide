import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import classNames from 'classnames';
import { fetchPosts, deletePost } from '../../../actions/post/postActions';
import { IPosts } from '../../../interfaces';
import reverseArray from '../../reverseArray';
import Label from '../../../ui/label';
import Truncate from 'react-truncate';

import './postList.scss';

interface IHomePostsProps {
    props: any;
    fetchPosts(): any;
    deletePost(id: string): any;
}

class PostList extends Component<IHomePostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props.props;
        const postAray = reverseArray(posts);

        return (
            <div className={classNames('container', 'homePosts')}>
                <div className="post-list-container">
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
                                There is no post or database connection problem.
                            </p>
                        )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    props: state.posts
});

// {fetchPosts: fetchPost} shorthand
export default connect(mapStateToProps, { fetchPosts, deletePost })(PostList);
