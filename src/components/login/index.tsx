import styled from 'styled-components';

import Logo from '#/asset/logo.svg';
import NaverLogin from '#/asset/naverlogin.png';
import KakaoLogin from '#/asset/kakaologin.png';

function Login() {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title>내 냉장고.. 어쩌지?</Title>
        <img src={Logo} alt="logo" className="logo" />
      </TitleContainer>
      <TopSquare
        onClick={() => {
          window.location.href =
            'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=oANn_XItQT8dwVAmksWz&state=blah&redirect_uri=http://localhost:3000/navercallback';
        }}
      >
        <ImageContainer1 url={NaverLogin} />
      </TopSquare>
      <BottomSquare
        onClick={() => {
          window.location.href =
            'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=0bc3192a45ac1d9e2f8c80f9ae7dc2b2&redirect_uri=http://localhost:3000/kakaocallback';
        }}
      >
        <ImageContainer2 url={KakaoLogin} />
      </BottomSquare>
    </LoginContainer>
  );
}

const ImageContainer1 = styled.div<{
  url: string;
}>`
  display: flex;

  background: url(${(props) => props.url});
  background-size: cover;

  width: 90%;
  height: 60px;

  align-items: center;
  justify-self: center;

  margin-top: 100px;
`;

const ImageContainer2 = styled.div<{
  url: string;
}>`
  display: flex;

  background: url(${(props) => props.url});
  background-size: cover;

  width: 90%;
  height: 60px;

  align-items: center;
  justify-self: center;

  margin-top: 100px;
  margin-left: 10px;
`;

const TopSquare = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: calc((100vh - 200px) / 2);
  background-color: #03c75a;

  border-style: solid;
  border-color: royalblue;
  border-width: 10px 10px 5px 10px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;

  align-items: center;
  justify-items: center;
`;

const BottomSquare = styled.div`
  display: flex;
  max-width: 100%;
  height: calc((100vh - 200px) / 2);
  background-color: #fee500;

  border-style: solid;
  border-color: royalblue;
  border-width: 5px 10px 10px 10px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 20px;

  flex-direction: column;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

const TitleContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  .logo {
    height: 100%;
  }
`;

const Title = styled.span`
  font-size: 1.6rem;

  max-width: 50px;
  word-break: keep-all;
`;

export default Login;
