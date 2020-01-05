import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, editPost } from '../../../actions/postActions';
import { IPost, ICategoryOptions, IPostState, IEvent } from '../../../interfaces';
import { IPostFormState, IPostForm } from '../../../interfaces/postForm';
import { COLOR_VARIANTS } from '../../../constants/colorVariant';
import Message from '../../../ui/message';
import { setMessage } from '../../../actions/messageActions';
import { postFormState } from '../../../utils/postFormState';
import { uploadFile } from '../../../utils/postFormFunctions';

import './postForm.scss';

interface IEditPostsProps {
    fetchSinglePost: (id: string) => void;
    editPost: (id: string, updatedPost: IPostForm) => void;
    post: IPost;
    id: string;
    setMessage: (arg0: string, arg1: string) => void;
}

class EditPost extends Component<IEditPostsProps, IPostFormState> {
    state = postFormState

    componentDidMount() {
        this.props.fetchSinglePost(this.props.id);
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps(newProps: any) {
        const postFromDB = newProps.post;
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                title: postFromDB.title,
                category: postFromDB.category,
                description: postFromDB.description,
                image: `/uploads/${postFromDB.image}`,
                file: postFromDB.image,
                fileName: postFromDB.image
            }
        }));
    }

    onChangeFile = (e: IEvent) => {
        const { files } = e.target;

        // Set state and uploadFile
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                fileName: files[0].name
            }
        }));
        uploadFile(files[0]);

        // Decleare FileReader to preview selected image
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState(prevState => ({
                post: {
                    ...prevState.post,
                    previewURL: reader.result,
                }
            }));
        };

        if (files[0]) {
            reader.readAsDataURL(files[0]);
            this.setState(prevState => ({
                post: {
                    ...prevState.post,
                    previewURL: reader.result,
                }
            }));
        }
    };

    onChange = (e: IEvent) => {
        const { name, value } = e.target;

        this.setState(prevState => {
            const post = Object.assign({}, prevState.post);
            post[name] = value;
            return { post };
        });
    };

    onSubmit = (e: IEvent) => {
        e.preventDefault();

        const { post } = this.state;
        try {
            const date = new Date();

            const updatedPost = {
                title: post.title,
                description: post.description,
                image: post.fileName,
                category: post.category,
                updated: date
            };

            this.props.editPost(this.props.id, updatedPost);
            this.props.setMessage('Post has been updated successfully', COLOR_VARIANTS.INFO);
        } catch (err) {
            if (err.response.status === 500) {
                this.props.setMessage('There was a problem with the server', COLOR_VARIANTS.DANGER);
            } else {
                this.props.setMessage(err.response.data.msg, COLOR_VARIANTS.DANGER);
            }
        }
    };

    messageClickHandler = () => {
        this.setState({ isMessageDisplay: false });
    }

    render() {
        const { post, options } = this.state;
        return (
            <div className="post-form-container">
                <form className="post-form" onSubmit={this.onSubmit}>
                    <div>
                        <label>Title <span className="required">&#42;</span></label>
                        <input type="text" className="input-title" name="title" placeholder="Please enter a title" onChange={this.onChange} value={post.title} />
                    </div>
                    <div>
                        <label>Category <span className="required">&#42;</span></label>
                        <select name="category" onChange={this.onChange}>
                            <option value={post.category}>{post.category}</option>
                            {options.map((option: ICategoryOptions) => (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Description <span className="required">&#42;</span></label>
                        <textarea name="description" onChange={this.onChange} value={post.description} />
                    </div>
                    <div>
                        <label>Image <span className="required">&#42;</span></label>
                        <input type="file" onChange={this.onChangeFile} className="file-input" />
                        <figure className="image-preview">
                            <img
                                src={post.previewURL}
                                alt={post.title}
                            />
                        </figure>
                        <label>{post.fileName}</label>
                    </div>
                    <div>
                        <input type="submit" value="update" />
                    </div>
                </form>
                <Message />
            </div>
        );
    }
}

const mapStateToProps = (state: IPostState) => ({
    post: state.posts.post
});

export default connect(mapStateToProps, { fetchSinglePost, editPost, setMessage })(EditPost);
