import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, editPost } from '../../../actions/post/postActions';
import { IPosts } from '../../../interfaces/interfaces';
import Label from '../../../ui/label';

interface IEditPostsProps {
    fetchSinglePost: any;
    editPost: any;
    post: IPosts;
    id: string;
}

interface IEditPostState {
    post: [];

}

class EditPost extends Component<IEditPostsProps, IEditPostState> {
    componentDidMount() {
        this.props.fetchSinglePost('5df1543287cf3c16142685f9');
    }


    render() {
        const { post } = this.props;
        console.log(post);
        return (
            <section className="edit-post-container">
                <Label></Label>
                <figure className="post-img">
                    <img
                        src={`/uploads/${post.image}`}
                        alt={post.title}
                    />
                </figure>
                <div className="post-content">
                    <h2 className="post-title">{post.title}</h2>
                    <p>{post.description}</p>
                </div>

            </section>
        );
    }
}

const mapStateToProps = (state: any) => ({
    post: state.posts.post
});

export default connect(mapStateToProps, { fetchSinglePost, editPost })(EditPost);
