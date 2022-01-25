import React, { FC } from "react";
import * as S from "./Sortbar.styles";

export interface ISortbarProps {
  parameters: string[];
  clickHandler: (parameter: string) => void;
}

export const Sortbar: FC<ISortbarProps> = ({ parameters, clickHandler }) => {
  return (
    <S.Wrapper>
      {parameters.map((title) => <S.Text onClick={() => clickHandler(title)}>{title}</S.Text>)}
    </S.Wrapper>
  );
}
