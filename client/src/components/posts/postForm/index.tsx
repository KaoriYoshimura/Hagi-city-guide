import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addPost } from '../../../actions/post/postActions';
import { INewPostState } from '../../../interfaces/interfaces';
import classNames from 'classnames';
import { CATEGORY_OPTIONS } from '../../../constants/category';

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
        value: '?'
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
        const { options, value } = this.state;
        return (
            <div className="post-form-container">
                <h2>Creat a new post</h2>
                <form className="post-form" onSubmit={this.onSubmit}>
                    <div>
                        <label>Image <span>&#42;</span></label>
                        <input type="file" onChange={this.onChangeFile} />
                        <label>Title <span>&#42;</span></label>
                        <input type="text" name="title" placeholder="Please enter a title" onChange={this.onChange} />
                        <label>Category <span>&#42;</span></label>
                        <select name="category" value={value} onChange={this.onChange}>
                            <option value="" selected>Please choose category</option>
                            {options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                        <label>Image <span>&#42;</span></label>
                        <input type="text" name="description" placeholder="Description" onChange={this.onChange} />
                        <label>Image <span>&#42;</span></label>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPost })(PostForm);
