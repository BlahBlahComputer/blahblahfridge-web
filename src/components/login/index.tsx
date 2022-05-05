import styled from 'styled-components';

import Logo from '#/asset/logo.svg';

function Login() {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title>내 냉장고... 어쩌지?</Title>
        <img src={Logo} alt="logo" className="logo" />
      </TitleContainer>
    </LoginContainer>
  );
}

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
  font-size: 1.6rem;

  max-width: 50px;
  word-break: keep-all;
`;

export default Login;
