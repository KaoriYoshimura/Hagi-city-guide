import React from 'react';
import classNames from 'classnames';
import { IFixedArticle } from '../../../interfaces/interfaces';
import Label from '../../../ui/label';
import './homeArticle.scss';

const FixedArticle = (props: any) => (
    <>
        {props.posts.map((post: IFixedArticle, index: number) => (
            <article
                key={index}
                className={classNames(
                    'article-container',
                    `item-${post.category.replace(/\s+/g, '-').toLowerCase()}`
                )}
            >
                <a href={post.link} rel="noopener noreferrer" target="_blank">
                    <div className="image-container">
                        <figure>
                            <img src={post.image} alt={post.title} />
                        </figure>
                        <div className="text-background">
                            <div className="text-container">

                                <Label variant={post.category.replace(/\s+/g, '-').toLowerCase()}>{post.category}</Label>
                                <div className="post-title">{post.title}</div>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
        ))}
    </>
);

export default FixedArticle;
