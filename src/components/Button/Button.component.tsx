import React, { FC } from "react";
import * as S from "./Button.styles";

export interface IButtonProps {
  title: string;
  click: () => void;
}

export const Button: FC<IButtonProps> = ({ title, click }) => {
  return (
    <S.ButtonWrapper onClick={click}>
      <S.ButtonTitle>{title}</S.ButtonTitle>
    </S.ButtonWrapper>
  );
};
