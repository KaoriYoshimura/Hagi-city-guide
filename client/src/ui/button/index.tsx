import React from 'react';
import classNames from 'classnames';

import './button.scss';

interface IButtonProps {
    variant: string;
    children: any;
}

const Button = (props: IButtonProps) => {
    return (
        <button
            className={classNames(
                'button-container',
                props.variant
            )}
        >
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    variant: 'default',
};

export default Button;
