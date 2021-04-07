import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

/* eslint-disable import/no-anonymous-default-export */

export const store = {
    _state: {
        dialogsData: {
            dialogs: [
                { id: 1, name: 'Victor' },
                { id: 2, name: 'Denis' },
                { id: 3, name: 'Anton' },
                { id: 4, name: 'Masha' },
                { id: 5, name: 'Kate' },
                { id: 6, name: 'Roha' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'What is your name?' },
                { id: 4, message: 'I am fine' },
                { id: 5, message: 'I hate you' },
            ],
            messageTextArea: 'Type your message',
        },
        profilePage: {
            posts: [
                { id: 1, postBody: 'post 1', likes: 25 },
                { id: 1, postBody: 'post 2', likes: 25 },
                { id: 1, postBody: 'post 3', likes: 25 },
                { id: 1, postBody: 'post 4', likes: 25 },
                { id: 1, postBody: 'post 5', likes: 25 },
            ],
            postsTextArea: 'Type your new post',
        },
        sidebar: [
            { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', name: 'Anton' },
            { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', name: 'Denis' },
            { avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU', name: 'Victor' },
        ]
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;

    },

    dispatch(action) {
       this._state.dialogsData = dialogsPageReducer(this._state.dialogsData, action);
       this._state.profilePage = profilePageReducer(this._state.profilePage, action);
       this._callSubscriber();
    },
};


