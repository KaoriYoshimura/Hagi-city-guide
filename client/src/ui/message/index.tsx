import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import './message.scss';

interface IMessageProps {
    messages: any;
}

interface IMessage {
    id: string;
    messageVariant: string;
    msg: string;
}
class Message extends Component<IMessageProps> {

    render() {
        const { messages } = this.props;
        if (messages !== null && messages.length > 0) {
            return (
                messages.map((message: IMessage) => (
                    <div
                        key={message.id}
                        className={classNames(
                            'message-container',
                            message.messageVariant,
                        )}
                    >
                        {message.msg}
                    </div>
                ))
            );
        }
        return null;
    }
}

const mapStateToProps = (state: { message: any }) => ({
    messages: state.message
});

export default connect(mapStateToProps)(Message);
