import styled from 'styled-components';

import Logo from '#/asset/logo.svg';

function PictureCheck() {
  return (
    <LoginContainer>
      <Square>
        <TitleContainer>
          <Title>이 재료.. 어쩌지?</Title>
          <img src={Logo} alt="logo" className="logo" />
        </TitleContainer>

        <ButtonContainer>
          <Start
            onClick={() => {
              window.location.replace('/welcome');
            }}
          >
            <ButtonLayout>확 인</ButtonLayout>
          </Start>

          <Start
            onClick={() => {
              window.location.replace('/welcome');
            }}
          >
            <ButtonLayout>취 소</ButtonLayout>
          </Start>
        </ButtonContainer>
      </Square>
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
  width: 100px;
  height: 40px;

  background-color: #136ac0;
  border-radius: 20px;

  align-items: flex-end;
  justify-self: center;

  font-size: 1.5rem;
  flex-direction: column;

  margin-left: 20px;
  margin-top: 70px;
  margin-right: 20px;
`;

const Square = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: calc(100vh - 200px);

  border-style: solid;
  border-color: #136ac0;
  border-width: 10px 10px 5px 10px;
  border-radius: 50px;

  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  align-items: center;
  justify-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  //justify-content: space-between;

  padding: 20px 20px;

  .logo {
    height: 150%;
  }
`;

const Title = styled.span`
  font-size: 1.6rem;

  max-width: 200px;
  word-break: keep-all;

  margin-top: 30px;
  margin-bottom: 30px;
`;

export default PictureCheck;
