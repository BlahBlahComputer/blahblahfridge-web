import styled from 'styled-components';

import WelcomeLogo from '#/asset/logologo.jpg';

function Profile() {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title>내 냉장고에 온 걸 환영해!!!!!!!</Title>
      </TitleContainer>

      <ImageContainer url={WelcomeLogo} />

      <Start
        onClick={() => {
          alert('확인');
        }}
      >
        <ButtonLayout>확 인</ButtonLayout>
      </Start>
    </LoginContainer>
  );
}

const ButtonLayout = styled.div`
  display: flex;

  align-items: center;
  justify-self: center;
  margin: auto;

  font-size: 1.5rem;
`;

const Start = styled.div`
  display: flex;
  max-width: 100%;
  height: 50px;

  background-color: royalblue;
  border-radius: 30px;

  align-items: flex-end;
  justify-self: center;

  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;

  font-size: 1.5rem;
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

  padding: 0 30px;

  .logo {
    height: 100%;
  }
`;
const ImageContainer = styled.div<{
  url: string;
}>`
  display: flex;

  background: url(${(props) => props.url});
  background-size: cover;

  width: 100%;
  height: 500px;

  align-items: center;

  margin-top: 30px;
`;

const Title = styled.span`
  font-size: 2rem;

  max-width: 220px;
  word-break: keep-all;
`;

export default Profile;
