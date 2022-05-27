import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from '#/components/login';
import Profile from '#/components/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
