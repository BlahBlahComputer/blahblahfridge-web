import styled from 'styled-components';

import defaultProfile from '#/asset/default-profile.png';
import Plus from '#/asset/plus.svg';

import Star from '../star';

import { useReviewRegister } from './hooks';

function ReviewRegister() {
  const {
    userName,
    userImage,
    reviewRegisterFunc,
    rate,
    setRate,
    content,
    setContent,
    today,
    fileRef,
    imageUploadFunc,
    imageURL,
    onChange,
  } = useReviewRegister();

  return (
    <RegisterContainer>
      <Square>
        <TitleContainer>
          <NameContainer>
            <ProfileCircle>
              <img src={userImage ?? defaultProfile} alt="profile" className="profile" />
            </ProfileCircle>
            <Title>
              {userName} {'>'}
            </Title>
          </NameContainer>
          <Title>{today}</Title>
        </TitleContainer>
        {imageURL ? (
          <ImageContainer onClick={imageUploadFunc}>
            <img src={imageURL} alt="pic" className="pic" />
          </ImageContainer>
        ) : (
          <ImageUploadBtn onClick={imageUploadFunc}>
            <img src={Plus} alt="plus" />
          </ImageUploadBtn>
        )}
        <ReviewArea value={content} onChange={(e) => setContent(e.target.value)} />
        <Star rate={rate} setRate={setRate} isEditable starSize="50px" />
        <Start onClick={reviewRegisterFunc}>
          <ButtonLayout>리뷰 등록하기</ButtonLayout>
        </Start>
      </Square>
      <input ref={fileRef} type="file" accept="image/*" onChange={onChange} hidden />
    </RegisterContainer>
  );
}

const ImageUploadBtn = styled.div`
  display: flex;

  width: 90%;
  height: 200px;

  justify-content: center;
  align-self: center;

  margin-top: 10px;

  background: rgba(0, 100, 255, 0.3);
`;

const ImageContainer = styled.div`
  display: flex;

  height: 100%;

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

  background-color: #136ac0;
  border-radius: 20px;

  align-self: center;
  justify-self: center;

  flex-direction: column;

  margin-top: 10px;
`;

const Square = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: calc(100vh - 120px);

  border-style: solid;
  border-color: #136ac0;
  border-width: 10px;
  border-radius: 30px;

  //margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;

  justify-items: center;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px 10px;

  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.2rem;

  max-width: 150px;
  word-break: keep-all;

  margin-left: 4px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;
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

const ReviewArea = styled.textarea`
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
  border-color: #136ac0;

  overflow-y: scroll;
  font-size: 1rem;

  align-self: center;
  word-break: break-word;
`;

export default ReviewRegister;
