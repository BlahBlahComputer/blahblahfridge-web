import styled from 'styled-components';

import useIngredient from './hooks';

interface Props {
  menuId: number;
}

function Ingredient({ menuId }: Props) {
  const { ingredientData } = useIngredient(menuId);

  return (
    <IngredientArea>
      {ingredientData?.data?.map((d) => {
        return <p key={d.id}>{d.name}</p>;
      })}
    </IngredientArea>
  );
}

export default Ingredient;

const IngredientArea = styled.div`
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

  padding: 8px;
`;
