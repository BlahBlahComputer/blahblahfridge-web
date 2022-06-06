import styled from 'styled-components';

import useRecipe from './hooks';

interface Props {
  menuId: number;
}

function Recipe({ menuId }: Props) {
  const { recipeData } = useRecipe(menuId);

  return <RecipeArea>{recipeData?.data?.recipe}</RecipeArea>;
}

export default Recipe;

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

  padding: 8px;
`;
