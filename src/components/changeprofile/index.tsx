import styled from 'styled-components';

function ChangeProfile() {
  return (
    <ContainerLayout>
      <ButtonLayout3>
        <ButtonLayout1
          onClick={() => {
            window.location.replace('/myreview');
          }}
        >
          리뷰 모아보기
        </ButtonLayout1>
        <ButtonLayout2
          onClick={() => {
            window.location.replace('/changeprofile');
          }}
        >
          프로필 수정하기
        </ButtonLayout2>
      </ButtonLayout3>
      <ResultArea>
        <Circle
          onClick={() => {
            alert('프로필 사진 등록 버튼');
          }}
        >
          <ButtonLayout>사진 추가</ButtonLayout>
        </Circle>

        <TitleContainer>
          <NameText>이름</NameText>
          <Name />
        </TitleContainer>

        <Start
          onClick={() => {
            alert('회원 등록 완료');
          }}
        >
          <ButtonLayout>완 료</ButtonLayout>
        </Start>
      </ResultArea>
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

const ButtonLayout1 = styled.div`
  display: flex;

  align-items: center;
  justify-self: center;
  display: flex;
  justify-content: center;

  width: 49%;
  height: 38px;
  background-color: royalblue;

  border-radius: 10px;
  margin: auto;
`;

const ButtonLayout2 = styled.div`
  display: flex;

  align-items: center;
  justify-self: center;
  display: flex;
  justify-content: center;

  width: 49%;
  height: 38px;
  background-color: white;

  border-radius: 10px;
  margin: auto;
`;

const ButtonLayout3 = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;

  align-items: center;
  justify-items: center;

  width: 100%;
  height: 42px;
  background-color: royalblue;

  border-radius: 10px;
  font-size: 1.5rem;
`;

const ResultArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  gap: 8px;
`;

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

const Name = styled.input`
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

  &:focus {
    outline: none;
  }
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
  width: 300px;
  height: 300px;

  border: 10px solid royalblue;
  border-radius: 50%;
  background-color: lightgrey;

  margin: auto;
  margin-top: 50px;

  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 30px;
`;

export default ChangeProfile;
