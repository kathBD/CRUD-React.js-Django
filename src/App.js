
import React from 'react';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Sliderbar from './components/Sliderbar/Sliderbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home'
import Appcss from './App.module.css'
import Footer from './components/Footer/Footer';
import Employees from './components/pages/Employees/Employees'
import Products from './components/pages/Products/ProductsList'
import Login from './components/Login/Login';


function App() {
  return (
    <>
    
       <Router>
      
         <div className={Appcss.nav}>
           <TopNavbar/>
           </div>
           <div>
         
           </div>
         <div className={Appcss.container}>   
    
          <Sliderbar/>
         
          <div className={Appcss.content}>
        <Switch>
        <Route path='/login' exact component={Login} />
          <Route path='/' exact component={Home} />
          <Route path='/Employees' component={Employees} />
          <Route path='/products' component={Products} />
          
        </Switch>

          </div>
        
  
         </div>
     
             <Footer/> 
     
     
   
             </Router>
              
        </>
        

 
  );
}

export default App;
