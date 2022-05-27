import styled from 'styled-components';

import Lens from '#/asset/lens.svg';

import useSearch from './hooks';
import SearchItem from './SearchItem';

function MainContainer() {
  const { keyword, setKeyword, searchResult } = useSearch();

  return (
    <ContainerLayout>
      <SearchArea>
        <SearchIcon src={Lens} alt="lens" />
        <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      </SearchArea>
      <ResultArea>
        {searchResult.map((result) => {
          return (
            <SearchItem
              key={result.foodId}
              foodImageUrl={result.foodImageUrl}
              foodName={result.foodName}
              spendTime={result.spendTime}
              category={result.category}
            />
          );
        })}
      </ResultArea>
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;

  align-items: flex-start;
  justify-items: center;

  width: 100%;
  height: 42px;
  background-color: #136ac0;

  border-radius: 10px;

  padding: 5px;
`;

const SearchIcon = styled.img`
  position: absolute;

  top: 2px;
  left: 2px;
  height: calc(100% - 4px);
`;

const SearchInput = styled.input`
  position: absolute;
  width: 100%;
  padding-left: 35px;
  padding-right: 10px;

  font-size: 1.4rem;

  height: 100%;
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;

const ResultArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  gap: 8px;

  overflow-y: scroll;
`;

export default MainContainer;
