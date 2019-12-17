import React, { Component } from 'react';
import classNames from 'classnames';

import './message.scss';

interface IMessageProps {
    variant: string;
    children: string;
    display: boolean;
    onClickClose: any;
}

class Message extends Component<IMessageProps> {
    static defaultProps: any; // Tell compilier there is props

    render() {
        return (
            <div
                className={classNames(
                    'message-container',
                    this.props.variant,
                    this.props.display ? 'message-show' : null
                )}
                role="alert"
            >
                {this.props.children}
                <button
                    type="button"
                    className="close-button"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={this.props.onClickClose}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

Message.defaultProps = {
    variant: 'info'
};

export default Message;
