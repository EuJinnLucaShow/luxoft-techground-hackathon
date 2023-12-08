import * as React from 'react';

import {Header} from "./common/components/Header/Header";
import {SideBar} from "./common/components/Sidebar/Sidebar";
import {Navigate, Route, Routes} from "react-router-dom";

import '../src/common/styles/normilize.scss';
import '../src/common/styles/main.scss';

function App() {
  return (
    <div className='app'>
      <>
        <Header />
        <SideBar />
        <div className='container'>
          <Routes>
            <Route path='/users' element={<div>Users</div>} />
            <Route
              path='/groups'
              element={<div>Groups</div>}
            />
            <Route
              path='/appeal'
              element={<div>Appeal</div>}
            />
            <Route
              path='/analytics'
              element={<div>Analytics</div>}
            />
            <Route
              path='/mailing'
              element={<div>Mailing</div>}
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
