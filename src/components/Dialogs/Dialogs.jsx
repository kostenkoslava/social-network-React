import React from 'react';
import { sentMessageActionCreator, updateMessageAreaActionCreator } from '../../redux/dialogsPageReducer';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsData.dialogs.map((d) => <Dialog id={d.id} name={d.name} />);
    const messagesElements = props.dialogsData.messages.map((m) => <Message message={m.message} />);
    const newMessageElement = React.createRef();
    const sentMessage = () => {
        props.dispatch(sentMessageActionCreator());
    };
    const onMessageAreaChange = () => {
        props.dispatch(updateMessageAreaActionCreator(newMessageElement.current.value));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}
                value={props.dialogsData.messageTextArea}
                onChange={onMessageAreaChange}></textarea>
                <button onClick={sentMessage} >Sent Message</button>
            </div>
        </div >
    )
};

export default Dialogs;