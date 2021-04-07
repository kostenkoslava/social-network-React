import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import s from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header />
        <div className={s.sideItems}>
          <Navbar />
          {/* <Sidebar sidebar={props.state.sidebar} /> */}
        </div>
        <div className={s.appWrapperContent}>
          <Route path='/profile' render={() => <Profile
          profilePage={props.state.profilePage}
          dispatch={ props.dispatch }/>} />
          <Route path='/dialogs' render={() => <Dialogs 
          dialogsData={props.state.dialogsData}
          dispatch={props.dispatch}/>} />
          <Route path='/news' render={News} />
          <Route path='/music' render={Music} />
          <Route path='/settings' render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};



export default App;
