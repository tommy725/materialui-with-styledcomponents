import React, { Suspense, lazy, createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Loading from './components/Loading';

export const Context = createContext();

const Bridge = lazy(() => import('./pages/Bridge'));

const App = () => {
  useEffect(() => {
    return () => {
      localStorage.removeItem('chainInfos');
    }
  }, [])

  return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Bridge />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
