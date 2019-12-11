import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post/postActions';
import { IPosts } from '../../../interfaces/interfaces';
import './homePosts.scss';
import { VARIANTS } from '../../../constants/category';
import PostArticle from '../postArticle';

interface IHomePostsProps {
    props: any;
    fetchPosts(): any;
}

const itemAccessMap = {
    _id: 'accessMap',
    title: 'How to access to Hagi',
    description: '',
    image: 'accessMap.png',
    category: VARIANTS.ACCESS,
    isFixed: true,
    fixedArticle: 'item-access',
};

const itemWorldHeritage = {
    _id: 'accessMap',
    title: 'Site of Japan’s Meiji Industrial Revolution',
    description: '',
    image: 'worldHeritage.jpg',
    category: VARIANTS.WORLDHERITAGE,
    isFixed: true,
    fixedArticle: 'item-world-heritage',
};

const itemGourmet = {
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

    reserveArray = (tempPosts: any) => {
        const postsToRun: any = [];
        for (let i = tempPosts.length - 1; i >= 0; i--) {
            postsToRun.push(tempPosts[i]);
        }
        return postsToRun;
    }

    createAccessMapArticle = (article: IPosts) => {
        const fixedArticle = [];
        fixedArticle.push(article);
        return fixedArticle;
    }

    render() {
        const { posts } = this.props.props;
        const homePostArray = this.reserveArray(posts);

        if (homePostArray.length < 8) {
            homePostArray.push(defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost, defaultPost);
        }

        const firstPost = homePostArray.slice(0, 1);
        const secondPost = homePostArray.slice(1, 2);
        const thirdPost = homePostArray.slice(2, 3);
        const forthPost = homePostArray.slice(3, 4);
        const fifthPost = homePostArray.slice(4, 5);
        const sixthPost = homePostArray.slice(5, 6);
        const seventhPost = homePostArray.slice(6, 7);
        const eigthPost = homePostArray.slice(7, 8);
        const ninthPost = homePostArray.slice(8, 9);

        return (
            <div className="item-container">
                <PostArticle posts={this.createAccessMapArticle(itemAccessMap)} />
                <PostArticle posts={firstPost} />
                <PostArticle posts={secondPost} />
                <PostArticle posts={thirdPost} />
                <PostArticle posts={this.createAccessMapArticle(itemWorldHeritage)} />
                <PostArticle posts={forthPost} />
                <PostArticle posts={this.createAccessMapArticle(itemGourmet)} />
                <PostArticle posts={fifthPost} />
                <PostArticle posts={this.createAccessMapArticle(itemSpa)} />
                <PostArticle posts={sixthPost} />
                <PostArticle posts={seventhPost} />
                <PostArticle posts={this.createAccessMapArticle(itemPottery)} />
                <PostArticle posts={eigthPost} />
                <PostArticle posts={ninthPost} />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    props: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(HomePosts);
