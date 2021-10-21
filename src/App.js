import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/";
import Footer from './components/Footer';
import Login from './pages/Login/'
import Products from './pages/Products';
import Edit from './components/Edit/EditProducts'
import HomeStart from './pages/Homestart';
import Employees from './components/Employees';


export const UserContext = React.createContext()

const App = () => {
  const [name, setName] = useState('');
  const [manager, setManager] = useState('')
  const [modalAdd, setModalAdd] = useState(false)
  return (
    <div className='App'>
    <UserContext.Provider value={{ name: name, setName: setName, manager: manager, setManager: setManager, modalAdd: [modalAdd, setModalAdd]}}>
        <Router>
          <Nav />
            <Route path='/' exact component={HomeStart} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/products' component={Products} />
            <Route path='/updateproducts/:id' component={Edit} />            
            <Route path='/register' component={Register} />
            <Route path='/employee' component={Employees} />
          <Footer />
        </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;