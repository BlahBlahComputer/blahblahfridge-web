import styled from 'styled-components';

import Logo from '#/asset/logo.svg';

function Login() {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title>내 냉장고..어쩌지?</Title>
        <img src={Logo} alt="logo" className="logo" />
      </TitleContainer>
      <TopSquare />
      <BottomSquare />
    </LoginContainer>
  );
}

const TopSquare = styled.div`
  display: flex;
  width: 700px;
  height: 500px;

  border-style: solid;
  border-color: skyblue;
  border-width: 10px 10px 5px 10px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
`;

const BottomSquare = styled.div`
  display: flex;
  width: 700px;
  height: 500px;
  background-color: gold;

  border-style: solid;
  border-color: skyblue;
  border-width: 5px 10px 10px 10px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  margin-bottom: 50px;
  margin-right: 30px;
  margin-left: 30px;
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

  padding: 0 30px;

  .logo {
    height: 100%;
  }
`;

const Title = styled.span`
  font-size: 2rem;

  max-width: 50px;
  word-break: keep-all;
`;

export default Login;
