import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Notfound from './components/Notfound';
import AddUsers from './components/AddUsers';
import VIew_users from './components/VIew_users';
function App() {
  return (
    <>  
  
     <Router>
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_user" element={<AddUsers />} />
          <Route path="/view_user" element={<VIew_users />} />

          <Route path="*" element={<Notfound />} />

        </Routes>
      
    </Router>
  
    </>

  );
}

export default App;
