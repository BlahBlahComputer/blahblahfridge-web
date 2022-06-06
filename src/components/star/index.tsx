import { useMemo } from 'react';
import styled from 'styled-components';

import UnfillStar from '#/asset/unfill-star.svg';
import FillStar from '#/asset/fill-star.svg';

interface Props {
  rate: number;
  isEditable: boolean;
  // eslint-disable-next-line react/require-default-props
  setRate?: (rate: number) => void;
  starSize: string;
}

function Star({ rate, isEditable, setRate, starSize }: Props) {
  const unfillStars = useMemo(
    () =>
      [...Array(5 - rate)].map((_, i) => {
        return (
          <StarImg
            src={UnfillStar}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            alt="star"
            starSize={starSize}
            onClick={() => {
              if (isEditable && setRate) {
                setRate(rate + i + 1);
              }
            }}
          />
        );
      }),
    [rate],
  );

  const fillStars = useMemo(
    () =>
      [...Array(rate)].map((_, i) => {
        return (
          <StarImg
            src={FillStar}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            alt="star"
            starSize={starSize}
            onClick={() => {
              if (isEditable && setRate) {
                setRate(i + 1);
              }
            }}
          />
        );
      }),
    [rate],
  );

  return (
    <StarLayout>
      {fillStars}
      {unfillStars}
    </StarLayout>
  );
}

const StarLayout = styled.div`
  display: flex;

  margin-top: 6px;
  justify-content: center;
`;

const StarImg = styled.img<{
  starSize: string;
}>`
  ${({ starSize }) => `
        width: ${starSize};
        height: ${starSize};
    `}
`;

export default Star;
