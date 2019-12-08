import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post/postActions';
import accessMap from '../../assets/images/accessMap.png'
import { Link } from 'react-router-dom';
import { IPosts } from '../../interfaces/interfaces';

interface IHomePostsProps {
    props: any;
    fetchPosts(): any;
}

class HomePosts extends Component<IHomePostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props.props;
        console.log(posts);
        return (
            <div>
                <img src={accessMap} />
                {posts.map((post: IPosts) => (
                    <article key={post.id}>
                        <Link to="#">
                            <div className="imageWrapper">
                                <figure>
                                    <img src={`/uploads/${post.image}`} alt={post.title} />
                                </figure>
                            </div>
                            <div className="textWrapper">
                                <div>{post.category}</div>
                                <div>{post.title}</div>
                            </div>
                        </Link>
                    </article>
                ))}

            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    props: state.posts
});

// {fetchPosts: fetchPost} shorthand
export default connect(mapStateToProps, { fetchPosts })(HomePosts);
