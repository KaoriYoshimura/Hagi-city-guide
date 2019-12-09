import React from 'react';
import classNames from 'classnames';
import './label.scss';

interface ILabelProps {
    variant?: string;
    children: string;
}

const Label = (props: any) => {
    return (
        <span
            className={classNames(
                'label',
                props.variant,
            )}
        >
            {props.children}
        </span>
    );
};

Label.defaultProps = {
    variant: 'info'
};

export default Label;
