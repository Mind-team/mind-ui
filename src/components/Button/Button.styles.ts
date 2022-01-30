import styled from "styled-components";

export const ButtonWrapper = styled.button`
  height: 53px;
  background: ${(props) => props.theme.accent};
  border-radius: 16px;
  outline: none;
  border: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-top: 13px;
  display: flex;
  align-self: center;
  color: #FFFFFF;
  cursor: pointer;
  justify-content: center;
  :hover {
    transition: 400ms;
    box-shadow: 0px 0px 15px ${(props) => props.theme.accent};
  }
`;

export const ButtonTitle = styled.span`
  display: flex;
  align-self: center;
  justify-self: center;
  padding: 13px 23px;
`;
