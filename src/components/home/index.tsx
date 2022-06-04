import styled from 'styled-components';

import Logo from '#/asset/logo.svg';

function Home() {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title>내 냉장고.. 어쩌지?</Title>
        <img src={Logo} alt="logo" className="logo" />
      </TitleContainer>
      <TopSquare
        onClick={() => {
          alert('camera');
        }}
      >
        <ButtonLayout>사 진 찍 기</ButtonLayout>
      </TopSquare>
      <BottomSquare
        onClick={() => {
          window.location.replace('/');
        }}
      >
        <ButtonLayout>레 시 피 검 색</ButtonLayout>
      </BottomSquare>
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
const TopSquare = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: calc((100vh - 200px) / 2);
  //background-color: #03c75a;

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
  //background-color: #fee500;

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
`;

const Title = styled.span`
  font-size: 1.6rem;

  max-width: 50px;
  word-break: keep-all;
`;

export default Home;
