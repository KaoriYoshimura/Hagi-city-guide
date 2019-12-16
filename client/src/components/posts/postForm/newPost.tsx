import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addPost } from '../../../actions/post/postActions';
import { IPostFormState } from '../../../interfaces';
import { CATEGORY_OPTIONS } from '../../../constants/category';
import './postForm.scss';

interface INewPostProps {
    addPost: any;
}

class NewPost extends Component<INewPostProps, IPostFormState> {
    state = {
        options: CATEGORY_OPTIONS,
        post: {
            file: '',
            fileName: '',
            uploadedFile: {},
            title: '',
            description: '',
            category: '',
            image: '',
        }
    }

    onChangeFile = (e: any) => {
        const { files } = e.target;

        this.setState(prevState => ({
            post: {
                ...prevState.post,
                file: files[0],
                fileName: files[0].name
            }
        }));

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState(prevState => ({
                post: {
                    ...prevState.post,
                    image: reader.result,
                }
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
            this.setState(prevState => ({
                post: {
                    ...prevState.post,
                    image: reader.result,
                }
            }));
        }
    };

    onChange = (e: any) => {
        const { name, value } = e.target;

        this.setState(prevState => {
            const post = Object.assign({}, prevState.post);
            post[name] = value;
            return { post };
        });
    }

    onSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', this.state.post.file);
        try {
            const res = await axios.post('/api/uploadFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            const { fileName, filePath } = res.data;

            this.setState(prevState => ({
                post: {
                    ...prevState.post,
                    uploadedFile: { fileName, filePath }
                }
            }));
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }

        const newPost = {
            title: this.state.post.title,
            description: this.state.post.description,
            image: this.state.post.fileName,
            category: this.state.post.category,
        };

        this.props.addPost(newPost);
    };

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
                        {post.image ? (
                            <figure className="image-preview">
                                <img
                                    src={post.image}
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
            </div>
        );
    }
}

export default connect(null, { addPost })(NewPost);
