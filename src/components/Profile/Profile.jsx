import React from 'react';
import Posts from './MyPosts/Posts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts profilePage={props.profilePage}
            dispatch={props.dispatch}/>
        </div>
    );
};
export default Profile;
