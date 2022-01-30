import React, { FC } from "react";
import * as MiniS from "./MiniInfoWidget.styles";

export interface IMiniInfoWidgetData {
  leftSideContent: string;
  rightSideContent: string;
}

export interface IMiniInfoWidgetProps {
  size: "mini";
  data: IMiniInfoWidgetData;
  click?: () => void;
}

export type IInfoWidgetProps = IMiniInfoWidgetProps;

export const InfoWidget: FC<IInfoWidgetProps> = ({
  size,
  data,
  click = () => {},
}) => {
  if (size === "mini") {
    return (
      <MiniS.Wrapper onClick={click}>
        <MiniS.LeftSide>{data.leftSideContent}</MiniS.LeftSide>
        <MiniS.RightSide>
          <MiniS.RightSideInnerText>
            {data.rightSideContent}
          </MiniS.RightSideInnerText>
        </MiniS.RightSide>
      </MiniS.Wrapper>
    );
  }
  return <></>;
};
