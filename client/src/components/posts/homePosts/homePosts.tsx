/* eslint-disable global-require */
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
import Label from '../../../ui/label';
import VARIANT from '../../../constants/variant';

interface IHomePostsProps {
    props: any;
    fetchPosts(): any;
}

const accessMap = {
    _id: 'accessMap',
    title: 'How to access to Hagi',
    description: '',
    image: 'accessMap.png',
    category: VARIANT.ACCESS,
    // __v: 0,
    isFixed: true,
    fixedArticle: 'item-access',
};

const worldHeritage = {
    _id: 'accessMap',
    title: 'How to access to Hagi',
    description: '',
    image: 'worldHeritage.jpg',
    category: VARIANT.WORLDHERITAGE,
    // __v: 0,
    isFixed: true,
    fixedArticle: 'item-world-heritage',
};

const itemFood = {
    _id: 'food',
    title: 'Enjoy local food',
    description: '',
    image: 'fugu.jpg',
    category: VARIANT.FOOD,
    // __v: 0,
    isFixed: true,
    fixedArticle: 'item-food',
};

const itemSpa = {
    _id: 'spa',
    title: 'Enjoy our spa - onsen -',
    description: '',
    image: 'onsen.jpg',
    category: VARIANT.GUIDE,
    // __v: 0,
    isFixed: true,
    fixedArticle: 'item-spa',
};

const itemPottery = {
    _id: 'pottery',
    title: 'Our Hagiyaki',
    description: '',
    image: 'hagiyaki.jpg',
    category: VARIANT.REGINAL,
    // __v: 0,
    isFixed: true,
    fixedArticle: 'item-pottery',
};

const defaultPost = {
    _id: 'defaultPost1',
    title: '',
    description: '',
    image: 'kikugahama.jpg',
    category: VARIANT.GUIDE,
    // __v: 0,
    isFixed: true,
    fixedArticle: 'post',
};

class HomePosts extends Component<IHomePostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    reserveArray = (tempPosts: any) => {
        const postsToRun: any = [];
        console.log(tempPosts);
        for (let i = tempPosts.length - 1; i >= 0; i--) {
            postsToRun.push(tempPosts[i]);
        }
        return postsToRun;
    }

    render() {
        const { posts } = this.props.props;
        let tempPosts = [posts];
        let testPosts = [];

        console.log(defaultPost);
        console.log(tempPosts);
        if (tempPosts.length < 8) {
            tempPosts = posts.push(defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost);
            console.log(tempPosts);
        }

        console.log(tempPosts);
        posts.splice(0, 0, accessMap);
        posts.splice(4, 0, worldHeritage);
        posts.splice(6, 0, itemFood);
        posts.splice(8, 0, itemSpa);
        posts.splice(11, 0, itemPottery);
        posts.splice(-2, 12);
        // const postsToRun = this.reserveArray(tempPosts);
        // console.log(postsToRun);
        // const lengthOfPosts = posts.length;
        // const firstPost = posts.slice(lengthOfPosts - 1, lengthOfPosts);
        // const secondPost = posts.slice(lengthOfPosts - 2, lengthOfPosts - 1);
        // const thirdPost = posts.slice(lengthOfPosts - 3, lengthOfPosts - 2);
        // const fourthPost = posts.slice(lengthOfPosts - 4, lengthOfPosts - 3);
        // const fifthPost = posts.slice(lengthOfPosts - 5, lengthOfPosts - 4);
        // const sixthPost = posts.slice(lengthOfPosts - 6, lengthOfPosts - 7);
        // const seventhPost = posts.slice(6, 7);
        console.log(posts);
        return (
            <main className={classNames('container', 'home-posts')}>
                <div className="item-container">
                    {posts.map((post: IPosts) => (
                        <div
                            key={post.id}
                            className={classNames(post.isFixed ? post.fixedArticle : 'post')}>
                            <article className="article-container">
                                <Link to="#">
                                    <div className="image-container">
                                        <figure>
                                            <img src={
                                                // eslint-disable-next-line no-undef
                                                post.isFixed ? require(`../../../assets/images/homePosts/${post.image}`) : `/uploads/${post.image}`
                                            } alt={post.title} />
                                        </figure>
                                    </div>
                                    <div className="text-background">
                                        <div className="text-container">
                                            <Label>{post.category}</Label>
                                            <div className="post-title">{post.title}</div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        </div>
                    ))}
                    {/* <div className="item-access fixed">
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
                    </div> */}
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
