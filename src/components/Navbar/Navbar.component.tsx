import React from "react";
import * as S from "./Navbar.styles";

export const Navbar = () => {
  return (
    <S.Wrapper>
      <S.NavMenu>
        <S.List>
          <S.ListElement>
              <S.Text>Главная</S.Text>
          </S.ListElement>
          <S.ListElement>
              <S.Text>История</S.Text>
          </S.ListElement>
          <S.ListElement>
              <S.Text>Парковки</S.Text>
          </S.ListElement>
          <S.ListElement>
              <S.Text>Профиль</S.Text>
          </S.ListElement>
        </S.List>
      </S.NavMenu>
    </S.Wrapper>
  );
}
