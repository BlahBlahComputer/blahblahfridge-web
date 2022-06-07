import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { analyzeState } from '#/context/analyzeContext';

import SearchItem from '../MainContainer/SearchItem';

function AnalyzeResult() {
  const [analyzeResult] = useRecoilState(analyzeState);

  return (
    <ContainerLayout>
      <ResultArea>
        {analyzeResult.length !== 0 ? (
          analyzeResult.map((result) => {
            return (
              <Link to={`/menu/${result.id}`} key={result.id}>
                <SearchItem
                  foodImageUrl={result.image}
                  foodName={result.name}
                  spendTime={result.time}
                  category={result.category}
                />
              </Link>
            );
          })
        ) : (
          <>
            <Text>검색 결과가 없습니다.</Text>
            <Link to="/">
              <HomeButton>
                <Text>홈으로</Text>
              </HomeButton>
            </Link>
          </>
        )}
      </ResultArea>
    </ContainerLayout>
  );
}

export default AnalyzeResult;

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

const ResultArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  gap: 8px;

  overflow-y: scroll;

  align-items: center;
  justify-self: center;
`;

const Text = styled.span`
  font-size: 1.4rem;
`;

const HomeButton = styled.div`
  background-color: #136ac0;
  color: white;
  width: 200px;
  height: 50px;

  border-radius: 10px;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
