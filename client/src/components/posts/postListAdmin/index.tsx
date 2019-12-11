import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { fetchPosts } from '../../../actions/post/postActions';
import { IPosts } from '../../../interfaces/interfaces';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './postListAdmin.scss';

interface IHomePostsProps {
    props: any;
    fetchPosts(): any;
}

class PostListAdmin extends Component<IHomePostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props.props;
        console.log(posts, posts.length);
        return (
            <div className={classNames('container', 'homePosts')}>
                <div className="post-list-admin-container">
                    {/* Show table if there is post */}
                    {posts.length > 0 ? (
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        {/* Table header */}
                                        <th>ID</th>
                                        <th>Datum</th>
                                        <th>Title</th>
                                        <th>category</th>
                                        <th>Edit</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody>
                                    {posts.map((post: IPosts) => (
                                        <tr key={post._id}>
                                            <td>{post._id}</td>
                                            {/* <td>{post.date}</td> */}
                                            <td><Moment format="DD/MM/YYYY HH:mm">{post.date}</Moment></td>
                                            <td>{post.title}</td>
                                            <td>{post.category}</td>
                                            <td className="list-center">
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    className="admin-icon"
                                                // onClick={() => this.decrement(bookings.booking_id)}
                                                />
                                            </td>
                                            <td className="list-center">
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className="admin-icon"
                                                // onClick={() => this.increment(bookings.booking_id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                            // Show message instead of table if there is no post
                            <p>
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
export default connect(mapStateToProps, { fetchPosts })(PostListAdmin);
