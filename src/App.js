import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../src/componets/Layout/Layout';
import ViewGeneral from './componets/ViewGeneral/ViewGeneral';

function App() {
  return (
    <Router>
        <div className="App">
          
        </div>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ViewGeneral/>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
