import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post/postActions';
import { IHomePostsState } from '../../interfaces/interfaces';
import combineReducers from '../../reducers';

// interface IfetchPostsProps {
//     posts: [];
//     fetchPosts: any;
// }

class HomePosts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props.props;
        console.log(posts);
        console.log(this.props);
        return (
            <div>
                <img src="/uploads/about_map.png" />
                {posts.map(post => (
                    <article key={post.id}>
                        <img src={`/uploads/${post.image}`} />
                    </article>
                ))}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    props: state.posts
});

// {fetchPosts: fetchPost} shorthand
export default connect(mapStateToProps, { fetchPosts })(HomePosts);
