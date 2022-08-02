import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from './views/client';
import Dashboard from './views/dashboard';
import HomePage from './views/homePage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={ <HomePage /> }/>
       <Route path='/client' element={ <Client /> }/>
       <Route path='/dashboard' element={ <Dashboard /> }/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
