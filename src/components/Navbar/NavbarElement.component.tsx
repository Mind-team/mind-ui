import React from "react";
import * as S from "./Navbar.styles";

export const NavbarElement: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <S.ListElement>
      <S.Text>{children}</S.Text>
    </S.ListElement>
  );
};
