import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    let posts = 0;
    let likes = 0;
    return (
        <div>
            <div>
            <textarea>
            </textarea>
            <button>
                Add post
            </button>
        </div>
            <Post postCounter = {posts += 1} likeCounter = {likes += 1}/>
            <Post postCounter = {posts += 1} likeCounter = {likes += 1}/>
            <Post postCounter = {posts += 1} likeCounter = {likes += 1}/>
        </div>
    );
};
export default Posts;
