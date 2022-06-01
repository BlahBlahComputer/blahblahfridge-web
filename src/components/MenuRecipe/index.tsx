import styled from 'styled-components';

import useSearch from './hooks';
import SearchItem from './SearchItem';

function MenuRecipe() {
  const { keyword, setKeyword, searchResult } = useSearch();

  return (
    <ContainerLayout>
      <MenuArea>
        {searchResult.map((result1) => {
          return (
            <SearchItem
              key={result1.foodId}
              foodImageUrl={result1.foodImageUrl}
              foodName={result1.foodName}
              spendTime={result1.spendTime}
              category={result1.category}
            />
          );
        })}
      </MenuArea>
      <ButtonLayout>
        <ButtonLayout2
          onClick={() => {
            window.location.replace('/menu/ingredient');
          }}
        >
          재료
        </ButtonLayout2>
        <ButtonLayout1
          onClick={() => {
            window.location.replace('/menu/recipe');
          }}
        >
          레시피
        </ButtonLayout1>
        <ButtonLayout2
          onClick={() => {
            window.location.replace('/menu/review');
          }}
        >
          리뷰
        </ButtonLayout2>
      </ButtonLayout>
      <RecipeArea>랄라라라라랄라라랄</RecipeArea>
    </ContainerLayout>
  );
}

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

const ButtonLayout1 = styled.div`
  display: flex;

  align-items: center;
  justify-self: center;
  display: flex;
  justify-content: center;

  width: 32%;
  height: 32px;
  background-color: white;

  border-radius: 10px;
  margin: auto;
`;

const ButtonLayout2 = styled.div`
  display: flex;

  align-items: center;
  justify-self: center;
  display: flex;
  justify-content: center;

  width: 32%;
  height: 32px;
  background-color: royalblue;

  border-radius: 10px;
  margin: auto;
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

const RecipeArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;

  width: 90%;
  height: calc(100vh - 432px);

  gap: 8px;

  border-radius: 10px;

  overflow-y: scroll;
  font-size: 1.2rem;

  word-break: break-word;
`;
export default MenuRecipe;
