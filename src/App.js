
import './App.css';
import * as React from 'react';
import {PermanentDrawer} from './components/PermanentDrawer';
import { Switch, Route } from "react-router-dom";
import { AddUser } from './routes/addUser';
import { AddProducts } from './routes/addProducts';
import {UserTable} from './routes/userTable';
import {createContext,useState} from 'react';
import {userData} from './globalData'
import {AdminDashboard} from './components/AdminDashboard.js'

export const StudentContext = createContext();

function App() {

  const [uservalue,setUserValue]= useState(userData);
  return (
    <div className="App">
      <AdminDashboard />

      <Switch>
        <StudentContext.Provider value ={{userData,uservalue,setUserValue}}>
            {/* Each route is case, eg. - case '/about': */}
            <Route path="/addUser">
              <AddUser />
            </Route>
            <Route path="/addProducts">
              <AddProducts />
            </Route>
            <Route path="/userTable">
              <UserTable />
            </Route>

            {/* For Checking purpose */}
            <Route path ='/permanent'>
              <PermanentDrawer />
            </Route>
            <Route exact path ='/'>
              <div className='homePage'>
              <h1>Hi</h1>
              </div>
            </Route>
          </StudentContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
