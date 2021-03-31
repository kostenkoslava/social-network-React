import React from 'react';
import Posts from './MyPosts/Posts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={s.img__main}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="main pic" />
            </div>
            <div>
                ava + descr
            </div>
            <Posts />
        </div>
    );
};
export default Profile;
