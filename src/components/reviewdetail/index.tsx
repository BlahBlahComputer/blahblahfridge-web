import styled from 'styled-components';
import dayjs from 'dayjs';

import defaultProfile from '#/asset/default-profile.png';

import Star from '../star';

import { useReviewDetail } from './hooks';

function ReviewDetail() {
  const { reviewData, deleteFunc } = useReviewDetail();

  return (
    <RegisterContainer>
      <Square>
        <TitleContainer>
          <NameContainer>
            <ProfileCircle>
              {reviewData?.data?.userimage && reviewData?.data?.userimage !== '' ? (
                <img src={reviewData?.data?.userimage} alt="profile" className="profile" />
              ) : (
                <img src={defaultProfile} alt="profile" className="profile" />
              )}
            </ProfileCircle>
            <Title>
              {reviewData?.data?.username} {'>'}
            </Title>
          </NameContainer>
          <Title>{dayjs(reviewData?.data?.created_at).format('YYYY.MM.DD')}</Title>
        </TitleContainer>
        {reviewData?.data?.image && reviewData.data.image !== '' && (
          <ImageContainer>
            <img src={reviewData.data.image} alt="pic" className="pic" />
          </ImageContainer>
        )}
        <ReviewArea>{reviewData?.data?.content}</ReviewArea>
        <Star rate={reviewData?.data?.rate ?? 0} isEditable={false} starSize="50px" />
        {reviewData?.data?.deletable && (
          <DeleteBtn onClick={deleteFunc}>
            <span>리뷰 삭제</span>
          </DeleteBtn>
        )}
      </Square>
    </RegisterContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;

  width: auto;
  height: 100px;

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
  border-color: #136ac0;

  overflow-y: scroll;
  font-size: 1rem;

  align-self: center;
  word-break: break-word;

  padding: 8px;
`;

const DeleteBtn = styled.div`
  width: 100%;
  height: 50px;

  background: #136ac0;
  border-radius: 10px;

  display: flex;

  color: white;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

export default ReviewDetail;
