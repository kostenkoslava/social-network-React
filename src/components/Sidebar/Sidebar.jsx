import React from 'react';
import s from './Sidebar.module.css';

const Friend = (props) => {
    return <div className={s.friend}>
    <img src={props.avatar} alt={`${props.name} avatar`}/>
    <span>{props.name}</span>
</div>
}

const Sidebar = (props) => {
    const friendElements = props.sidebar.map((f) => <Friend avatar={f.avatar} name={f.name} />);
    return (
        <div className={s.sidebarWrapper}>
            <h2>Friends</h2>
            <div className={s.friendsItems}></div>
            { friendElements }
        </div>
    )
}

export default Sidebar;