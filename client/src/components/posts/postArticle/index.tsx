import React from 'react';
import { Link } from 'react-router-dom';
import { IPosts } from '../../../interfaces/interfaces';
import './postArticle.scss';
import Label from '../../../ui/label';
import classNames from 'classnames';

const PostArticle = (props: any) => (
    <>
        {props.posts.map((post: IPosts) => (
            <article
                key={post._id}
                className={classNames(
                    'article-container',
                    post.isFixed ? post.fixedArticle : 'post'
                )}
            >
                <Link to={`/posts/${post._id}`}>
                    <div className="image-container">
                        <figure>
                            <img src={
                                // eslint-disable-next-line no-undef
                                // eslint-disable-next-line global-require
                                post.isFixed ? require(`../../../assets/images/homePosts/${post.image}`) : `/uploads/${post.image}`
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
