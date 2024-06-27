import Main from './screens/main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import React from 'react';
import UserTable from 'screens/user/Users';
import Articles from 'screens/articles/Articles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main />}>
            <Route path="user" element={<UserTable />} />
            <Route path="article" element={<Articles />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
