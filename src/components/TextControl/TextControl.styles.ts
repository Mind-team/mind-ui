import styled from "styled-components";

const widthRate = 100 / 1920;
const heightRate = 100 / 1080;

interface Styles {
  isInvalid: boolean;
  isValid: boolean;
}

export const InputWrapper = styled.input<Styles>`
  height: 53px;
  width: 417px;
  border: 2px solid rgba(154, 154, 154, 0.61);
  border-color: ${(props) =>
    props.isValid ? "green" : props.isInvalid ? "red" : props.theme.accent};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-bottom: calc(50vh * ${heightRate});
  color: ${(props) => props.theme.plainText};
  box-sizing: border-box;
  outline: none;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 41px;
  cursor: pointer;
  padding-left: 25px;
  background-color: ${(props) => props.theme.header};
  ::placeholder {
    color: #9a9a9a;
  }
  :hover {
    transition: 400ms;
    ::placeholder {
      transition: 400ms;
      color: ${(props) => props.theme.actionColor};
    }
  }
`;
