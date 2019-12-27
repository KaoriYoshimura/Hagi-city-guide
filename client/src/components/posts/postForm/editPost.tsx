import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchSinglePost, editPost } from '../../../actions/postActions';
import { IPosts, ICategoryOptions, IPostFormState, IPostState, IPostForm, IEvent } from '../../../interfaces';
import { CATEGORY_OPTIONS } from '../../../constants/category';
import { COLOR_VARIANTS } from '../../../constants/colorVariant';
import Message from '../../../ui/message';
import { setMessage } from '../../../actions/messageActions';

import './postForm.scss';

interface IEditPostsProps {
    fetchSinglePost: (id: string) => void;
    editPost: (id: string, updatedPost: IPostForm) => void;
    post: IPosts;
    id: string;
    setMessage: (arg0: string, arg1: string) => void;
}

class EditPost extends Component<IEditPostsProps, IPostFormState> {
    constructor(props: IEditPostsProps) {
        super(props);
        this.state = {
            options: CATEGORY_OPTIONS,
            post: {
                file: '',
                fileName: '',
                uploadedFile: {},
                title: '',
                description: '',
                category: '',
                image: '',
            },
            message: {
                variant: '',
                text: ''
            },
            isMessageDisplay: false,
            shouldRedirect: false
        };
    }

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

    onChange = (e: IEvent) => {
        const { name, value } = e.target;

        this.setState(prevState => {
            const post = Object.assign({}, prevState.post);
            post[name] = value;
            return { post };
        });
    };

    onSubmit = async (e: IEvent) => {
        e.preventDefault();

        if (this.state.post.file === File) {
            const formData = new FormData();
            formData.append('file', this.state.post.file);
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
        }


        try {
            const date = new Date();

            const updatedPost = {
                title: this.state.post.title,
                description: this.state.post.description,
                image: this.state.post.fileName,
                category: this.state.post.category,
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
                                src={post.image}
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
