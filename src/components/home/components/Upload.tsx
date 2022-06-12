import styled, { keyframes } from 'styled-components';

function Upload() {
  return (
    <UploadContainer>
      <UploadModal>
        <Text>이미지를 업로드하고 있습니다</Text>
        <Spinner />
      </UploadModal>
    </UploadContainer>
  );
}

export default Upload;

const UploadContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const UploadModal = styled.div`
  position: relative;
  top: calc(50vh - 100px);

  background-color: white;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 200px;
  margin: 0 auto;
`;

const SpinnerFrame = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  margin-top: 30px;

  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${SpinnerFrame} 2s linear infinite;
`;

const Text = styled.span`
  font-size: 1.4rem;
`;
