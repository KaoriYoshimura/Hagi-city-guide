import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post/postActions';
import imgAccessMap from '../../../assets/images/homePosts/accessMap.png';
import imgWorldHeritage from '../../../assets/images/homePosts/worldHeritage.jpg';
import imgFood from '../../../assets/images/homePosts/fugu.jpg';
import imgSpa from '../../../assets/images/homePosts/onsen.jpg';
import imgPottery from '../../../assets/images/homePosts/hagiyaki.jpg';
import { Link } from 'react-router-dom';
import { IPosts } from '../../../interfaces/interfaces';
import classNames from 'classnames';
import PostArticle from '../postArticle';
import './homePosts.scss';

interface IHomePostsProps {
    props: any;
    fetchPosts(): any;
}

class HomePosts extends Component<IHomePostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        // Make component and sent firstPost, secondPost as a props
        const { posts } = this.props.props;
        const lengthOfPosts = posts.length;
        console.log(lengthOfPosts);
        const firstPost = posts.slice(lengthOfPosts - 1, lengthOfPosts);
        const secondPost = posts.slice(lengthOfPosts - 2, lengthOfPosts - 1);
        const thirdPost = posts.slice(lengthOfPosts - 3, lengthOfPosts - 2);
        // const fourthPost = posts.slice(lengthOfPosts - 4, lengthOfPosts - 3);
        // const fifthPost = posts.slice(lengthOfPosts - 5, lengthOfPosts - 4);
        // const sixthPost = posts.slice(lengthOfPosts - 6, lengthOfPosts - 7);
        // const seventhPost = posts.slice(6, 7);
        console.log(posts);
        return (
            <main className={classNames('container', 'home-posts')}>
                <div className="item-container">
                    <div className="item-access fixed">
                        <img src={imgAccessMap} />
                    </div>
                    <div className="post">
                        <PostArticle posts={firstPost} />
                    </div>
                    <div className="post">
                        <PostArticle posts={secondPost} />
                    </div>
                    <div className="post">
                        <PostArticle posts={thirdPost} />
                    </div>
                    <div className="item-world-heritage fixed">
                        <img src={imgWorldHeritage} />
                    </div>
                    <div className="post">
                        <PostArticle posts={firstPost} />
                    </div>
                    <div className="item-food fixed">
                        <img src={imgFood} />
                    </div>
                    <div className="post">
                        <PostArticle posts={firstPost} />
                    </div>
                    <div className="item-spa fixed">
                        <img src={imgSpa} />
                    </div>
                    <div className="post">
                        <PostArticle posts={firstPost} />
                    </div>
                    <div className="post">
                        <PostArticle posts={firstPost} />
                    </div>
                    <div className="item-pottery fixed">
                        <img src={imgPottery} />
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state: any) => ({
    props: state.posts
});

// {fetchPosts: fetchPost} shorthand
export default connect(mapStateToProps, { fetchPosts })(HomePosts);
