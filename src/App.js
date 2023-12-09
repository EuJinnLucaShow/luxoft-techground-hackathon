import * as React from 'react';

import {Header} from "./common/components/Header/Header";
import {SideBar} from "./common/components/Sidebar/Sidebar";
import {Navigate, Route, Routes} from "react-router-dom";

import '../src/common/styles/normilize.scss';
import '../src/common/styles/main.scss';
import {Appeal} from "./pages/Appeal/Appeal";
import {Groups} from "./pages/Groups/Groups";
import {GroupsEdit} from "./pages/Groups/pages/GroupsEdit/GroupsEdit";
import {GroupsCreate} from "./pages/Groups/pages/GroupsCreate/GroupsCreate";
import {Analitycs} from "./pages/Analitycs/Analitycs";
import {Mailing} from "./pages/Mailing/Mailing";
import { UsersPage } from './pages/UsersPage/UsersPage';

function App() {
  return (
    <div className='app'>
      <>
        <Header />
        <SideBar />
        <div className='container'>
          <Routes>
            <Route path='/users' element={<UsersPage/>} />
            <Route
              path='/groups'
              element={<Groups/>}
            />
            <Route
              path='/groups/create'
              element={<GroupsCreate/>}
            />
            <Route
              path='/groups/:id'
              element={<GroupsEdit/>}
            />
            <Route
              path='/appeal'
              element={<Appeal/>}
            />
            <Route
              path='/analytics'
              element={<Analitycs/>}
            />
            <Route
              path='/mailing'
              element={<Mailing/>}
            />
            <Route
              path='*'
              element={<Navigate to='/users' />}
            />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
