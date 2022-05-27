import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Start from '#/components/start';
import Login from '#/components/login';
import Profile from '#/components/profile';
import Welcome from '#/components/welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
