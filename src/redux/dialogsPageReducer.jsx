const SENT_MESSAGE = 'Sent Message';
const UPDATE_MESSAGE_AREA = 'Update Message Area';

const dialogsPageReducer = (state, action) => {
    if(action.type === SENT_MESSAGE) {
        state.messages.push({ id: 1, message: state.messageTextArea });

    }
    if(action.type === UPDATE_MESSAGE_AREA) {
        state.messageTextArea = action.message;
    }
    return state;
};

export const sentMessageActionCreator = () => ({ type: SENT_MESSAGE });
export const updateMessageAreaActionCreator = (text) => 
        ({ type: UPDATE_MESSAGE_AREA, message: text });

export default dialogsPageReducer;