import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { fetchPosts, deletePost } from '../../../actions/postActions';
import { setMessage } from '../../../actions/messageActions';
import { IPosts } from '../../../interfaces';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLOR_VARIANTS } from '../../../constants/colorVariant';
import Message from '../../../ui/message/';
import './postListAdmin.scss';

interface IHomePostsProps {
    props: any;
    fetchPosts(): any;
    deletePost(id: string): any;
    setMessage: any;
}

class PostListAdmin extends Component<IHomePostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    onClickDelete = (id: string) => {
        this.props.setMessage('Post has been deleted successfully', COLOR_VARIANTS.INFO);
        this.props.deletePost(id);
    }

    render() {
        const { posts } = this.props.props;
        return (
            <div className={classNames('homePosts')}>
                <div className="post-list-admin-container">
                    <Message className="delete-message" />
                    {/* Show table if there is post */}
                    {posts.length > 0 ? (
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        {/* Table header */}
                                        <th>ID</th>
                                        <th>Datum</th>
                                        <th>Updated on</th>
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

                                            <td><Moment format="DD/MM/YYYY HH:mm">{post.date}</Moment></td>
                                            <td>
                                                {post.updated === null
                                                    ? null : (
                                                        <Moment format="DD/MM/YYYY HH:mm">{post.updated}</Moment>
                                                    )}
                                            </td>
                                            <td>{post.title}</td>
                                            <td>{post.category}</td>
                                            <td className="list-center">
                                                <Link to={`/admin/${post._id}`}>
                                                    <FontAwesomeIcon
                                                        icon={faEdit}
                                                        className="admin-icon"
                                                    />
                                                </Link>
                                            </td>
                                            <td className="list-center">
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className="admin-icon"
                                                    onClick={() => this.onClickDelete(post._id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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
export default connect(mapStateToProps, { fetchPosts, deletePost, setMessage })(PostListAdmin);
