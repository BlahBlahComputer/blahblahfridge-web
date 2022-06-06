import styled from 'styled-components';

import Plus from '#/asset/plus.svg';

function PlusBtn() {
  return (
    <PlusBtnArea>
      <PlusIcon src={Plus} alt="plus" />
    </PlusBtnArea>
  );
}

export default PlusBtn;

const PlusBtnArea = styled.div`
  position: fixed;

  right: 10px;
  bottom: 10px;

  background: #136ac0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 30px;

  width: 50px;
  height: 50px;

  padding: 15px;
`;

const PlusIcon = styled.img`
  width: 100%;
  height: 100%;
`;
