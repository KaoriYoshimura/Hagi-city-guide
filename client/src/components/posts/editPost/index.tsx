import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, editPost } from '../../../actions/post/postActions';
import { RouteComponentProps } from 'react-router-dom';
import { IPosts } from '../../../interfaces/interfaces';

interface IMatchParams {
    id: string;
}

interface IEditPostsProps extends RouteComponentProps<IMatchParams> {
    fetchSinglePost: any;
    editPost: any;
    match: any;
    post: IPosts;
}

// interface RouteComponentProps<P> {
//     match: IMatch<P>;
//     location: H.Location;
//     history: H.History;
//     staticContext?: any;
// }

// export interface IMatch<P> {
//     params: P;
//     isExact: boolean;
//     path: string;
//     url: string;
// }

interface IEditPostState {
    post: [];

}

class EditPost extends Component<IEditPostsProps, IEditPostState> {
    componentDidMount() {
        this.props.fetchSinglePost(this.props.match.params.id);
    }

    render() {
        // const { post } = this.props.props;
        console.log(this.props.match.params.id);
        console.log(this.props.post);
        return (
            <div>test</div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    post: state.posts.post
});

export default connect(mapStateToProps, { fetchSinglePost, editPost })(EditPost);
