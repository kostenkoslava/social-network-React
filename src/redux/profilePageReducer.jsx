const ADD_POST = 'Add Post';
const UPDATE_POST_AREA = 'Update Post Area';

const profilePageReducer = (state, action) => {
    if (action.type === ADD_POST) {
        state.posts.push({
            id: 2, postBody:
                state.postsTextArea,
            likes: 0
        });
        state.postsTextArea = '';
    }
    if (action.type === UPDATE_POST_AREA) {
        debugger;
        state.postsTextArea = action.message;
    }
    return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextAreaActionCreator = (text) =>
    ({ type: UPDATE_POST_AREA, message: text });

export default profilePageReducer;