import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post/postActions';
import { INewPostState, INewPostProps } from '../../interfaces/interfaces';

class NewPost extends Component<INewPostProps, INewPostState> {
    state = {
        file: '',
        fileName: '',
        uploadedFile: {},
        title: '',
        description: '',
        category: ''
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
        console.log(this.props.history);
        this.props.history.push('/');
    };

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="file" onChange={this.onChangeFile} />
                        <label>
                            {this.state.fileName}
                            {this.state.title}
                            {this.state.description}
                            {this.state.category}
                        </label>
                        <input type="text" name="title" placeholder="Title" onChange={this.onChange} />
                        <input type="text" name="category" placeholder="category" onChange={this.onChange} />
                        <input type="text" name="description" placeholder="Description" onChange={this.onChange} />
                        <input type="submit" />
                    </div>
                </form>
            </>
        );
    }
}

export default connect(null, { addPost })(NewPost);
