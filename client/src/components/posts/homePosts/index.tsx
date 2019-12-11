/* eslint-disable global-require */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post/postActions';
import { Link } from 'react-router-dom';
import { IPosts } from '../../../interfaces/interfaces';
import classNames from 'classnames';
import './homePosts.scss';
import Label from '../../../ui/label';
import { VARIANTS } from '../../../constants/category';

interface IHomePostsProps {
    props: any;
    fetchPosts(): any;
}

const accessMap = {
    _id: 'accessMap',
    title: 'How to access to Hagi',
    description: '',
    image: 'accessMap.png',
    category: VARIANTS.ACCESS,
    isFixed: true,
    fixedArticle: 'item-access',
};

const worldHeritage = {
    _id: 'accessMap',
    title: 'Site of Japan’s Meiji Industrial Revolution',
    description: '',
    image: 'worldHeritage.jpg',
    category: VARIANTS.WORLDHERITAGE,
    isFixed: true,
    fixedArticle: 'item-world-heritage',
};

const itemFood = {
    _id: 'food',
    title: 'Enjoy local food',
    description: '',
    image: 'fugu.jpg',
    category: VARIANTS.GOURMET,
    isFixed: true,
    fixedArticle: 'item-food',
};

const itemSpa = {
    _id: 'spa',
    title: 'Enjoy our spa - onsen -',
    description: '',
    image: 'onsen.jpg',
    category: VARIANTS.GUIDE,
    isFixed: true,
    fixedArticle: 'item-spa',
};

const itemPottery = {
    _id: 'pottery',
    title: 'Our Hagiyaki',
    description: '',
    image: 'hagiyaki.jpg',
    category: VARIANTS.LOCAL,
    isFixed: true,
    fixedArticle: 'item-pottery',
};

const defaultPost = {
    _id: 'defaultPost1',
    title: '',
    description: '',
    image: 'kikugahama.jpg',
    category: VARIANTS.GUIDE,
    isFixed: true,
    fixedArticle: 'post',
};

class HomePosts extends Component<IHomePostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    createPostContent = (posts: IPosts[]) => {
        console.log(posts);
        const postContent = [];
        const numberOfPosts = 14;

        for (let i = 0; i < numberOfPosts; i++) {
            postContent.push(<article
                key={posts[i].id}
                className={classNames(
                    'article-container',
                    posts[i].isFixed ? posts[i].fixedArticle : 'post'
                )}
            >
                <Link to="#">
                    <div className="image-container">
                        <figure>
                            <img src={
                                // eslint-disable-next-line no-undef
                                posts[i].isFixed ? require(`../../../assets/images/homePosts/${posts[i].image}`) : `/uploads/${posts[i].image}`
                            } alt={posts[i].title} />
                        </figure>
                        <div className="text-background">
                            <div className="text-container">

                                <Label variant={posts[i].category.replace(/\s+/g, '-').toLowerCase()}>{posts[i].category}</Label>
                                <div className="post-title">{posts[i].title}</div>
                            </div>
                        </div>
                    </div>

                </Link>
            </article>);
        }
        return postContent;
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
        posts.reverse();

        console.log(defaultPost);
        console.log(tempPosts);
        if (tempPosts.length < 8) {
            tempPosts = posts.push(defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost);
            console.log(tempPosts);
        }

        console.log(tempPosts);
        posts.splice(0, 0, accessMap);
        posts.splice(4, 0, worldHeritage);
        posts.splice(6, 0, itemFood);
        posts.splice(8, 0, itemSpa);
        posts.splice(11, 0, itemPottery);
        console.log(posts);
        return (
            <div className="item-container">
                {this.createPostContent(posts)}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    props: state.posts
});

// {fetchPosts: fetchPost} shorthand
export default connect(mapStateToProps, { fetchPosts })(HomePosts);
