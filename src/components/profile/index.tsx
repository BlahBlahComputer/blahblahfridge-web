import styled from 'styled-components';

import Logo from '#/asset/logo.svg';

function Profile() {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title>내 프로필..어쩌지?</Title>
        <img src={Logo} alt="logo" className="logo" />
      </TitleContainer>

      <Circle
        onClick={() => {
          alert('프로필 사진 등록 버튼');
        }}
      >
        <ButtonLayout>사진 추가</ButtonLayout>
      </Circle>

      <TitleContainer>
        <NameText>이름</NameText>
        <Name
          onClick={() => {
            alert('닉네임 작성');
          }}
        />
      </TitleContainer>

      <Start
        onClick={() => {
          alert('회원 등록 완료');
        }}
      >
        <ButtonLayout>시 작 하 기</ButtonLayout>
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

const NameText = styled.span`
  font-size: 1.5rem;

  margin-top: 100px;

  max-width: 50px;
  word-break: keep-all;
`;

const Name = styled.div`
  display: flex;
  width: 300px;
  height: 30px;

  border: 5px solid royalblue;
  border-radius: 30px;

  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;

  align-items: flex-end;
  justify-self: center;

  flex-direction: column;
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

const Circle = styled.div`
  display: flex;
  width: 200px;
  height: 200px;

  border: 10px solid royalblue;
  border-radius: 50%;
  background-color: lightgrey;

  margin: auto;
  margin-top: 50px;

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

const Title = styled.span`
  font-size: 2rem;

  max-width: 50px;
  word-break: keep-all;
`;

export default Profile;
