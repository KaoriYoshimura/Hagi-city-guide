import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchSinglePost, editPost } from '../../../actions/post/postActions';
import { IPosts, ICategoryOptions } from '../../../interfaces/interfaces';
import { CATEGORY_OPTIONS } from '../../../constants/category';
import './editPost.scss';

interface IEditPostsProps {
    fetchSinglePost: any;
    editPost: any;
    post: IPosts;
    id: string;
}

interface IEditPostState {
    post?: [];
    file: string;
    fileName: string;
    uploadedFile: {};
    [x: number]: any;
    options: any;
    title: string;
    description: string;
    category: string;
    image: string | any;
}

class EditPost extends Component<IEditPostsProps, IEditPostState> {
    constructor(props: IEditPostsProps) {
        super(props);
        this.state = {
            file: '',
            fileName: '',
            uploadedFile: {},
            title: '',
            description: '',
            category: '',
            image: '',
            options: CATEGORY_OPTIONS,
        };
    }

    componentDidMount() {
        this.props.fetchSinglePost(this.props.id);
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps(newProps: any) {
        const postFromDB = newProps.post;
        this.setState({
            title: postFromDB.title,
            category: postFromDB.category,
            description: postFromDB.description,
            image: `/uploads/${postFromDB.image}`,
            file: postFromDB.image,
            fileName: postFromDB.image
        });
    }

    onChangeFile = (e: any) => {
        this.setState({ file: e.target.files[0] });
        this.setState({ fileName: e.target.files[0].name });

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                image: reader.result
            });
        };
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                image: reader.result
            });
        }
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

        const date = new Date();

        const updatedPost = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.fileName,
            category: this.state.category,
            updated: date
        };

        this.props.editPost(this.props.id, updatedPost);
    };

    render() {
        const { title, category, image, description, options, fileName } = this.state;

        return (
            <div className="edit-post-container">
                <form className="post-form" onSubmit={this.onSubmit}>
                    <div>
                        <label>Title <span className="required">&#42;</span></label>
                        <input type="text" className="input-title" name="title" placeholder="Please enter a title" onChange={this.onChange} value={title} />
                    </div>
                    <div>
                        <label>Category <span className="required">&#42;</span></label>
                        <select name="category" onChange={this.onChange}>
                            <option value={category}>{category}</option>
                            {options.map((option: ICategoryOptions) => (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Description <span className="required">&#42;</span></label>
                        <textarea name="description" onChange={this.onChange} value={description} />
                    </div>
                    <div>
                        <label>Image <span className="required">&#42;</span></label>
                        <input type="file" onChange={this.onChangeFile} className="file-input" />
                        <figure className="image-preview">
                            <img src={image} />
                        </figure>
                        <label>{fileName}</label>
                    </div>
                    <div>
                        <input type="submit" value="post" />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    post: state.posts.post
});

export default connect(mapStateToProps, { fetchSinglePost, editPost })(EditPost);
