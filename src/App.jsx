import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ByCategory from './pages/ByCategory';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/byCategory/:category' element={<ByCategory/>}/>
          <Route path='/details/:postID' element={<DetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;