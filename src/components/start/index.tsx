import styled from 'styled-components';
import { useEffect } from 'react';

import Logo from '#/asset/logo.svg';

function Start() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  }, []);

  return (
    <Text2>
      <Text3>&nbsp;어&nbsp;&nbsp;쩔&nbsp;</Text3>
      <ImageContainer>
        <img src={Logo} alt="logo" className="logo" />
      </ImageContainer>
      <Text3>냉&nbsp;&nbsp;장&nbsp;&nbsp;고</Text3>
    </Text2>
  );
}

const ImageContainer = styled.span`
  display: flex;

  margin-top: 50px;

  .logo {
    height: 300%;
  }
`;

const Text2 = styled.span`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-items: center;

  padding: 0 30px;
`;

const Text3 = styled.span`
  display: flex;
  justify-self: center;
  margin: auto;
  margin-top: 200px;
  font-size: 5rem;
`;

const Title = styled.span`
  font-size: 2rem;

  max-width: 50px;
  word-break: keep-all;
`;

export default Start;
