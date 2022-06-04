import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Start from '#/components/start';
import Login from '#/components/login';
import Profile from '#/components/profile';
import Welcome from '#/components/welcome';
import KakaoCallback from '#/components/kakaocallback';
import NaverCallback from '#/components/navercallback';

import MainContainer from './components/MainContainer';
import TopBar from './components/Topbar';
import MyReview from './components/MyReview';
import ChangeProfile from './components/changeprofile';
import MenuIngredient from './components/MenuIngredient';
import MenuRecipe from './components/MenuRecipe';
import MenuReview from './components/MenuReview';
import { userAuthState } from './context/authContext';
import PictureCheck from './components/picturecheck';
import ReviewRegister from './components/reviewregister';

function App() {
  const [isAuth] = useRecoilState(userAuthState);

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
          {/* <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes> */}
          {/* <Routes>
            <Route path="/welcome" element={<Welcome />} />
          </Routes> */}
          <Routes>
            <Route path="/kakaocallback" element={<KakaoCallback />} />
          </Routes>
          <Routes>
            <Route path="/navercallback" element={<NaverCallback />} />
          </Routes>
        </>
      )}
      {isAuth && (
        <>
          <TopBar />
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/" element={<MainContainer />} />
          </Routes>
          <Routes>
            <Route path="/picturecheck" element={<PictureCheck />} />
          </Routes>
          <Routes>
            <Route
              path="/reviewregister"
              element={<ReviewRegister imageUrlProfile={imageUrl} imageUrlPic={imageUrl} />}
            />
          </Routes>
          <Routes>
            <Route path="/myreview" element={<MyReview />} />
          </Routes>
          <Routes>
            <Route path="/changeprofile" element={<ChangeProfile />} />
          </Routes>
          <Routes>
            <Route path="/menu/ingredient" element={<MenuIngredient />} />
          </Routes>
          <Routes>
            <Route path="/menu/recipe" element={<MenuRecipe />} />
          </Routes>
          <Routes>
            <Route path="/menu/review" element={<MenuReview />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
