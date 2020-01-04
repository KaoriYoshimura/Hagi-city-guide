import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../actions/postActions';
import { setMessage } from '../../../actions/messageActions';
import { IPostFormState, IPostForm } from '../../../interfaces/postForm';
import { IEvent } from '../../../interfaces';
import { postFormState } from '../../../utils/postFormState';
import Message from '../../../ui/message/';
import { COLOR_VARIANTS } from '../../../constants/colorVariant';
import { uploadFile } from '../../../utils/postFormFunctions';

import './postForm.scss';

interface INewPostProps {
    addPost: (newPost: IPostForm) => void;
    setMessage: (arg0: string, arg1: string) => void;
}

class NewPost extends Component<INewPostProps, IPostFormState> {
    state = postFormState

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
    }

    onSubmit = (e: IEvent) => {
        e.preventDefault();

        const { post } = this.state;
        if (post.title === '' || post.description === '' || post.fileName === '' || post.category === '') {
            this.props.setMessage('Please fill in all field.', COLOR_VARIANTS.DANGER);
        } else {
            try {
                const newPost = {
                    title: post.title,
                    description: post.description,
                    image: post.fileName,
                    category: post.category,
                };

                this.props.addPost(newPost);
                this.props.setMessage('Post has been added successfully', COLOR_VARIANTS.INFO);
            } catch (err) {
                if (err.response.status === 500) {
                    this.props.setMessage('There was a problem with the server', COLOR_VARIANTS.DANGER);
                } else {
                    this.props.setMessage(err.response.data.msg, COLOR_VARIANTS.DANGER);
                }
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
                        <input type="text" className="input-title" name="title" placeholder="Please enter a title" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Category <span className="required">&#42;</span></label>
                        <select name="category" onChange={this.onChange}>
                            <option value="">Please choose category</option>
                            {options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Description <span className="required">&#42;</span></label>
                        <textarea name="description" placeholder="Please write description" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Image <span className="required">&#42;</span></label>
                        <input type="file" onChange={this.onChangeFile} className="file-input" />
                        {post.previewURL ? (
                            <figure className="image-preview">
                                <img
                                    src={post.previewURL}
                                    alt={post.title}
                                />
                            </figure>
                        ) : null}
                        {post.fileName ? (
                            <label>{post.fileName}</label>
                        ) : null}
                    </div>
                    <div>
                        <input type="submit" value="post" />
                    </div>
                </form>
                <Message />
            </div>
        );
    }
}

export default connect(null, { addPost, setMessage })(NewPost);
