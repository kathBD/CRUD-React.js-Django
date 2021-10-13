import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/";
import Home from "./pages/Home";
import Register from "./pages/Register/";
import Footer from './components/Footer';
import Login from './pages/Login/'


export const UserContext = React.createContext()

const App = () => {
  const [name, setName] = useState('');
  const [manager, setManager] = useState('')
  return (
    <div className='App'>
    <UserContext.Provider value={{ name: name, setName: setName, manager: manager, setManager: setManager }}>
        <Router>
          <Nav />
          <main className="form-signin">
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </main>
          <Footer />
        </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;