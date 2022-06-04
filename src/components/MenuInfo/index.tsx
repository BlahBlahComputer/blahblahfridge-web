import styled from 'styled-components';

import useMenuInfo from './hooks';
import Ingredient from './Ingredient';
import ItemInfo from './ItemInfo';
import Recipe from './Recipe';
import Review from './Review';

function MenuInfo() {
  const { setSelectButton, isIngredient, isRecipe, isReview, menuInfoData, menuId } = useMenuInfo();

  return (
    <ContainerLayout>
      <MenuArea>
        <ItemInfo
          foodImageUrl={menuInfoData?.data?.image ?? ''}
          foodName={menuInfoData?.data?.name ?? ''}
          spendTime={menuInfoData?.data?.time ?? 0}
          category={menuInfoData?.data?.category ?? ''}
        />
      </MenuArea>
      <ButtonLayout>
        <NavButton isSelected={isIngredient} onClick={() => setSelectButton(1)}>
          재료
        </NavButton>
        <NavButton isSelected={isRecipe} onClick={() => setSelectButton(2)}>
          레시피
        </NavButton>
        <NavButton isSelected={isReview} onClick={() => setSelectButton(3)}>
          리뷰
        </NavButton>
      </ButtonLayout>
      {isIngredient && <Ingredient menuId={Number(menuId)} />}
      {isRecipe && <Recipe menuId={Number(menuId)} />}
      {isReview && <Review menuId={Number(menuId)} />}
    </ContainerLayout>
  );
}

export default MenuInfo;

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: powderblue;
  border-radius: 10px;

  margin-top: 50px;
  height: calc(100vh - 150px);
`;

const MenuArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  background-color: white;
  border-radius: 10px;

  margin-top: 30px;
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;

  align-items: center;
  justify-items: center;

  width: 90%;
  height: 42px;
  background-color: royalblue;
  margin-top: 20px;

  border-radius: 10px;
  font-size: 1.4rem;
`;

const NavButton = styled.div<{
  isSelected: boolean;
}>`
  display: flex;

  align-items: center;
  justify-self: center;
  display: flex;
  justify-content: center;

  width: 32%;
  height: 32px;
  ${({ isSelected }) => `
      background-color: ${isSelected ? 'white' : 'royalblue'};
  `}

  border-radius: 10px;
  margin: auto;
`;
