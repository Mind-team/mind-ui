import React, { FC, useState } from "react";
import * as S from "./TextControl.styles";

export interface ITextControl {
  type: "text" | "password";
  placeholder: string;
}

export const TextControl: FC<ITextControl> = ({
  type = "text",
  placeholder,
}) => {
  const [content, setContent] = useState("");
  const [isTouched, setTouched] = useState(false);
  const [canValidate, setCanValidate] = useState(false);

  const handleChange = (event: any) => {
    setTouched(true);
    setContent(event.target.value);
  };

  return (
    <S.InputWrapper
      type={type}
      placeholder={placeholder}
      value={content}
      onChange={handleChange}
      onBlur={() => setCanValidate(true)}
      isInvalid={canValidate && content.length <= 4}
      isValid={isTouched && content.length > 4}
    />
  );
};
