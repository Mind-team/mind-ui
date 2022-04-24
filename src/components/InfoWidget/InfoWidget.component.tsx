import React, { FC } from "react";
import * as MiniS from "./MiniInfoWidget.styles";
import * as RoundS from "./RoundInfoWidger.styles";

export enum GradientBackground {
  RedNBlue = "linear-gradient(229.27deg, #003AFF -20.08%, #FF0000 151.7%)",
  LightPink = "linear-gradient(225.64deg, #EAB496 3.52%, #EF81F8 100%)",
  Purple = "linear-gradient(225.64deg, #886DEC 3.52%, #56439E 100%)",
  YellowNOrange = "linear-gradient(225deg, #FB8383 0%, #FFE480 100%)",
}

export interface IMiniInfoWidgetData {
  leftSideContent: string;
  rightSideContent: string;
}

export interface IMiniInfoWidgetProps {
  size: "mini";
  data: IMiniInfoWidgetData;
  click?: () => void;
}

export interface IRoundInfoWidgetData {
  text: string;
  gradientBackground: string | GradientBackground;
  iconLink?: string;
}

export interface IRoundInfoWidgetProps {
  size: "round";
  data: IRoundInfoWidgetData;
  click?: () => void;
}

export type IInfoWidgetProps = IMiniInfoWidgetProps | IRoundInfoWidgetProps;

export const InfoWidget: FC<IInfoWidgetProps> = ({
  size,
  data,
  click = () => {},
}) => {
  if (size === "mini" && "leftSideContent" in data) {
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

  if (size === "round" && "text" in data) {
    return (
      <RoundS.MiniWidgetWrapper
        style={{ background: data.gradientBackground }}
        onClick={click}
      >
        <RoundS.SmallContent>{data.text}</RoundS.SmallContent>
      </RoundS.MiniWidgetWrapper>
    );
  }

  return <></>;
};
