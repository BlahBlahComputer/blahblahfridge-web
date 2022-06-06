import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Start from '#/components/start';
import Login from '#/components/login';
import KakaoCallback from '#/components/kakaocallback';
import NaverCallback from '#/components/navercallback';

import MainContainer from './components/MainContainer';
import TopBar from './components/Topbar';
import { userAuthState } from './context/authContext';
import MenuInfo from './components/MenuInfo';
import Home from './components/home';
import ReviewRegister from './components/reviewregister';
import ReviewDetail from './components/reviewdetail';

function App() {
  const [isAuth] = useRecoilState(userAuthState);

  return (
    <BrowserRouter>
      {!isAuth && (
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kakaocallback" element={<KakaoCallback />} />
          <Route path="/navercallback" element={<NaverCallback />} />
        </Routes>
      )}
      {isAuth && (
        <>
          <TopBar />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu/:menuId" element={<MenuInfo />} />
            <Route path="/menu/:menuId/review/register" element={<ReviewRegister />} />
            <Route path="/menu/:menuId/review/:reviewId" element={<ReviewDetail />} />
            {/* <Route path="/picturecheck" element={<PictureCheck />} />
            <Route path="/myreview" element={<MyReview />} />
            <Route path="/changeprofile" element={<ChangeProfile />} /> */}
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
