import React from "react";
import * as S from "./Navbar.styles";

export const Navbar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <S.Wrapper>
      <S.NavMenu>
        <S.List>{children}</S.List>
      </S.NavMenu>
    </S.Wrapper>
  );
};
