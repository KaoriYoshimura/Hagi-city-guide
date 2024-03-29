import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../../interfaces';
import Label from '../../../ui/label';
import './homeArticle.scss';

const PostArticle = (props: any) => (
    <>
        {props.posts.map((post: IPost) => (
            <article
                key={post._id}
                className="article-container post"
            >
                <Link to={`/posts/${post._id}`}>
                    <div className="image-container">
                        <figure>
                            <img src={
                                // eslint-disable-next-line global-require
                                post.isDefault ? require(`../../../assets/images/homeDefault/${post.image}`) : `/uploads/${post.image}`
                            }
                                alt={
                                    post.isDefault ? post.defaultAlt : post.title
                                }
                            />
                        </figure>
                        <div className="text-background">
                            <div className="text-container">
                                {post.isDefault ? null : <Label variant={post.category.replace(/\s+/g, '-').toLowerCase()}>{post.category}</Label>}
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
