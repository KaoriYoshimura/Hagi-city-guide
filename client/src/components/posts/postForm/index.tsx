import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { addPost } from '../../../actions/post/postActions';
import { INewPostState } from '../../../interfaces/interfaces';
import { CATEGORY_OPTIONS } from '../../../constants/category';

import './postForm.scss';

export interface INewPostProps {
    addPost: any;
}

class PostForm extends Component<INewPostProps, INewPostState> {
    state = {
        file: '',
        fileName: '',
        uploadedFile: {},
        title: '',
        description: '',
        category: '',
        options: CATEGORY_OPTIONS,
    }

    onChangeFile = (e: any) => {
        this.setState({ file: e.target.files[0] });
        this.setState({ fileName: e.target.files[0].name });
    };

    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', this.state.file);
        try {
            const res = await axios.post('/api/uploadFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            const { fileName, filePath } = res.data;

            this.setState({ uploadedFile: { fileName, filePath } });
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }

        const newPost = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.fileName,
            category: this.state.category,
        };
        console.log(newPost);

        this.props.addPost(newPost);
    };

    render() {
        const { options } = this.state;
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
                        <input type="file" onChange={this.onChangeFile} />
                    </div>
                    <div>
                        <input type="submit" value="post" />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPost })(PostForm);
