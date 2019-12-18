import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchSinglePost } from '../../../actions/postActions';
import { CATEGORY_OPTIONS } from '../../../constants/category';
import { IPost, ICategoryOptions } from '../../../interfaces';
import './postForm.scss';

interface IEditPostState {
    post: IPost | any;
    [x: number]: any;
    options: any;
    value: any;
}

interface IPostFormProps {
    fetchSinglePost: Function;
    onSubmitForm: Function;
    onChangeInput: Function;
    onChangeFile: Function;
    options: ICategoryOptions[];
    post: IPost;
    submitValue: string;
    id: string | null;
    value: any;

}

interface IEvent {
    name: string | number;
    value: any;
}

class PostForm extends Component<IPostFormProps, IEditPostState> {
    constructor(props: IPostFormProps) {
        super(props);
        this.state = {
            options: CATEGORY_OPTIONS,
            post: this.props.value,
            value: '',
        };
    }

    componentDidMount() {
        if (this.props.id !== null) {
            this.props.fetchSinglePost(this.props.id);
        }
    }

    onSubmit = () => {
        this.props.onSubmitForm();
    }

    onChange = (e: { target: IEvent }) => {
        console.log(this.props.value)
        console.log(this.state)
        const { name, value } = e.target;
        this.setState(prevState => {
            const post = Object.assign({}, prevState.post);
            post[name] = value;
        });
        if (this.props.onChangeInput !== undefined) {
            this.props.onChangeInput(e);
        }
    }

    onChangeFile = () => {
        this.props.onChangeFile();
    }

    render() {
        const { options, submitValue } = this.props;
        const { category, description, image, title, fileName } = this.props.post;
        const { post } = this.state;

        return (
            <form className="post-form" onSubmit={this.onSubmit}>
                <div>
                    <label>Title <span className="required">&#42;</span></label>
                    <input type="text" className="input-title" name="title" placeholder="Please enter a title" onChange={this.onChange} value={post.title} />
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
                        <img
                            src={image}
                            alt={title}
                        />
                    </figure>
                    <label>{fileName}</label>
                </div>
                <div>
                    <input type="submit" value={submitValue} />
                </div>
            </form>
        );
    }
}
const mapStateToProps = (state: any) => ({
    post: state.posts.post
});

export default connect(mapStateToProps, { fetchSinglePost })(PostForm);
