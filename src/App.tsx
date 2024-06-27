import Main from './screens/main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import React from 'react';
import User from 'screens/user/User';
import Article from 'screens/article/Article';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main />}>
            <Route path="user" element={<User />} />
            <Route path="article" element={<Article />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
