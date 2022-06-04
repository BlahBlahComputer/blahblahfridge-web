import styled from 'styled-components';

interface Props {
  imageUrlProfile: string | null;
  imageUrlPic: string | null;
}

function ReviewRegister({ imageUrlProfile, imageUrlPic }: Props) {
  return (
    <LoginContainer>
      <Square>
        <TitleContainer>
          <NameContainer>
            <ProfileCircle>
              <img src={imageUrlProfile ?? ''} alt="profile" className="profile" />
            </ProfileCircle>
            <Title>&nbsp;띵헌 {'>'}</Title>
          </NameContainer>
          <Title>2022.05.22</Title>
        </TitleContainer>

        <ImageContainer>
          <img src={imageUrlPic ?? ''} alt="pic" className="pic" />
        </ImageContainer>

        <ReviewArea>
          <br />
          랄라라라라랄라라랄
        </ReviewArea>

        <Start
          onClick={() => {
            window.location.replace('/home');
          }}
        >
          <ButtonLayout>리뷰 등록하기</ButtonLayout>
        </Start>
      </Square>
    </LoginContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;

  width: 90%;

  justify-content: center;
  align-self: center;

  margin-top: 10px;

  .pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ButtonLayout = styled.div`
  display: flex;

  align-items: center;
  justify-self: center;
  margin: auto;

  font-size: 1.2rem;
`;

const Start = styled.div`
  display: flex;
  width: 90%;
  height: 40px;

  background-color: royalblue;
  border-radius: 20px;

  align-self: center;
  justify-self: center;

  flex-direction: column;

  //margin-top: 10px;
  margin-bottom: 20px;
`;

const Square = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: calc(100vh - 100px);

  border-style: solid;
  border-color: royalblue;
  border-width: 10px;
  border-radius: 30px;

  //margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;

  justify-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px 10px;

  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 1.2rem;

  max-width: 150px;
  word-break: keep-all;

  margin-top: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
`;

const ProfileCircle = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 70%;
  overflow: hidden;

  .profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ReviewArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  margin-bottom: 20px;

  width: 90%;
  height: 200px;

  gap: 8px;

  border-radius: 10px;
  border-width: 5px;
  border-style: solid;
  border-color: royalblue;

  overflow-y: scroll;
  font-size: 1rem;

  align-self: center;
  word-break: break-word;
`;

export default ReviewRegister;
