import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import Start from '#/components/start';
import Login from '#/components/login';
import Profile from '#/components/profile';
import Welcome from '#/components/welcome';
import KakaoCallback from '#/components/kakaocallback';
import NaverCallback from '#/components/navercallback';

import MainContainer from './components/MainContainer';
import TopBar from './components/Topbar';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    'https://m.nongmin.com/upload/bbs/202108/20210821005357060/20210821005357060.jpg',
  );

  return (
    <BrowserRouter>
      {!isAuth && (
        <>
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
          <Routes>
            <Route path="/kakaocallback" element={<KakaoCallback />} />
          </Routes>
          <Routes>
            <Route path="/navercallback" element={<NaverCallback />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
      {isAuth && (
        <>
          <TopBar imageUrl={imageUrl} />
          <Routes>
            <Route path="/" element={<MainContainer />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
