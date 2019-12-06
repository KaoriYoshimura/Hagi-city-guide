import React from 'react';

import './hero.scss';
import { IHeroProps } from '../../interfaces/interfaces';
import classNames from 'classnames';

const Hero = (props: IHeroProps) => {
    const { pageName, pageHeading } = props;

    return (
        <div className={classNames(
            'hero-container',
            pageName
        )}>
            {props.children}
            <h1 className="heading">{pageHeading}</h1>
        </div>
    );
};

export default Hero;
