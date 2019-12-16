import React from 'react';
import { Link } from 'react-router-dom';
import { IPosts } from '../../../interfaces/interfaces';
import Label from '../../../ui/label';
import './homeArticle.scss';

const PostArticle = (props: any) => (
    <>
        {props.posts.map((post: IPosts) => (
            <article
                key={post._id}
                className="article-container post"
            >
                <Link to={`/posts/${post._id}`}>
                    <div className="image-container">
                        <figure>
                            <img src={
                                // eslint-disable-next-line global-require
                                post.isDefault ? require(`../../../assets/images/homePosts/${post.image}`) : `/uploads/${post.image}`
                            } alt={post.title} />
                        </figure>
                        <div className="text-background">
                            <div className="text-container">

                                <Label variant={post.category.replace(/\s+/g, '-').toLowerCase()}>{post.category}</Label>
                                <div className="post-title">{post.title}</div>
                            </div>
                        </div>
                    </div>

                </Link>
            </article>
        ))}
    </>
);

export default PostArticle;
