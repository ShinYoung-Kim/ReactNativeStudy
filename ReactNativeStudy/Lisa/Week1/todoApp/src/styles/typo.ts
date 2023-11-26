import {css} from 'styled-components';

export const typo = {
  title: css`
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
  `,
  body: css`
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
  `,
} as const;
