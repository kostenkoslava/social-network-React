import React from 'react';
import { addPostActionCreator, updatePostTextAreaActionCreator} from '../../../redux/profilePageReducer';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
    const postsElements = props.profilePage.posts.map((p) => <Post postBody={p.postBody} likes={p.likes} />);
    const newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    function onPostChange(){
        props.dispatch(updatePostTextAreaActionCreator(newPostElement.current.value));
    };
    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={props.profilePage.postsTextArea}>
                    </textarea>
                </div>
                <div className={s.buttonAdd}>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            { postsElements }
            </div>
            
        </div>
    );
};
export default Posts;
