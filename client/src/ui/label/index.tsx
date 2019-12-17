import React from 'react';
import classNames from 'classnames';
import './label.scss';

interface ILabelProps {
    variant?: string;
    children: any;
    className?: string;
}

const Label = (props: ILabelProps) => {
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
