import React from 'react';
import { Link } from 'react-router-dom';
import { IPosts } from '../../../interfaces/interfaces';
import './postArticle.scss';
import Label from '../../../ui/label';

const PostArticle = (props: any) => (
    <>
        {props.posts.map((post: IPosts) => (
            <article className="article-container" key={post.id}>
                <Link to="#">
                    <div className="image-container">
                        <figure>
                            <img src={`/uploads/${post.image}`} alt={post.title} />
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
        ))}
    </>
);

export default PostArticle;
