import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/postActions';
import { IPost, IFixedArticle, IPostsProps, IPostsState } from '../../../interfaces';
import reverseArray from '../../reverseArray';
import * as fixedItems from '../../../constants/homeFixedItems';
import { defaultItems } from '../../../constants/homeDefaultItems';
import PostArticle from '../homeArticle/postArticle';
import FixedArticle from '../homeArticle/fixedArticle';

import './homePosts.scss';

class HomePosts extends Component<IPostsProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    createAccessMapArticle = (article: IPost | IFixedArticle) => {
        const fixedArticle = [];
        fixedArticle.push(article);
        return fixedArticle;
    }

    render() {
        const { posts } = this.props;
        const homePostArray = reverseArray(posts);

        if (homePostArray.length < 9) {
            defaultItems.map((item: IPost) => (
                homePostArray.push(item)
            ));
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
                <FixedArticle posts={this.createAccessMapArticle(fixedItems.accessMap)} />
                <PostArticle posts={firstPost} />
                <PostArticle posts={secondPost} />
                <PostArticle posts={thirdPost} />
                <FixedArticle posts={this.createAccessMapArticle(fixedItems.worldHeritage)} />
                <PostArticle posts={forthPost} />
                <FixedArticle posts={this.createAccessMapArticle(fixedItems.gourmet)} />
                <PostArticle posts={fifthPost} />
                <FixedArticle posts={this.createAccessMapArticle(fixedItems.guide)} />
                <PostArticle posts={sixthPost} />
                <PostArticle posts={seventhPost} />
                <FixedArticle posts={this.createAccessMapArticle(fixedItems.local)} />
                <PostArticle posts={eigthPost} />
                <PostArticle posts={ninthPost} />
            </div>
        );
    }
}

const mapStateToProps = (state: IPostsState) => ({
    posts: state.posts.posts
});

export default connect(mapStateToProps, { fetchPosts })(HomePosts);
