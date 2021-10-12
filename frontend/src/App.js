import React, { useState } from 'react';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

export const UserContext = React.createContext()

function App() {
  const [name, setName] = useState('');
  const [manager, setManager] = useState('')

/*   useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        if (response.ok) {
          const content = await response.json();

          setName(content.name);
          setManager(content.is_manager)
        } else {
          console.log('no response')
        }

      }
    )();
  }); */

  return (
    <UserContext.Provider value={{ name: name, setName: setName, manager: manager, setManager: setManager }}>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <main className="form-signin">
            <Route path="/" exact component={<Home />} />
            <Route path="/login" component={<Login />} />
            <Route path="/register" component={Register} />
          </main>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;