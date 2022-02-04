import React, { FC, useState } from "react";
import * as MiniStyles from "./ParkingWidgetMini.styles";
import * as LongStyles from "./ParkingWidgetLong.styles";
import { useDate, usePrice } from "../../hooks";

export interface IParkingWidgetData {
  parkingName: string;
  date: string | Date;
  price: number;
  detailsClick: () => void;
}

export interface IMiniCompletedParkingWidgetProps {
  size: "mini";
  data: IParkingWidgetData;
}

export interface IMiniUncompletedParkingWidgetProps {
  size: "mini";
  data: Pick<IParkingWidgetData, "price" | "detailsClick">;
}

export interface ILongParkingWidgetProps {
  size: "long";
  data: Pick<
    IParkingWidgetData,
    "parkingName" | "date" | "price" | "detailsClick"
  >;
}

export type IParkingWidgetProps =
  | IMiniCompletedParkingWidgetProps
  | IMiniUncompletedParkingWidgetProps
  | ILongParkingWidgetProps;

export const ParkingWidget: FC<IParkingWidgetProps> = ({ size, data }) => {
  const [isHover, setHover] = useState(false);
  const { formattedDate, formattedTime } = useDate(
    "date" in data ? data.date : null
  );
  const [priceLine] = usePrice("price" in data ? data.price : null);

  if (size === "mini") {
    return (
      <MiniStyles.Wrapper>
        {"parkingName" in data && data.parkingName && data.date && data.date ? (
          <MiniStyles.TitleWrapper>
            <span>{data.parkingName}</span>
            <span>{formattedTime}</span>
            <span>{formattedDate}</span>
          </MiniStyles.TitleWrapper>
        ) : (
          <MiniStyles.TitleWrapperUnfilled>
            <span>Вы сейчас на парковке</span>
          </MiniStyles.TitleWrapperUnfilled>
        )}
        <MiniStyles.Sum>{priceLine}</MiniStyles.Sum>
        <MiniStyles.Details onClick={data.detailsClick}>
          Подробнее
        </MiniStyles.Details>
      </MiniStyles.Wrapper>
    );
  }

  return (
    <LongStyles.Wrapper
      onMouseEnter={() => setHover(!isHover)}
      onMouseLeave={() => setHover(!isHover)}
    >
      <LongStyles.Title>
        {(data as unknown as ILongParkingWidgetProps["data"]).parkingName}
      </LongStyles.Title>
      <div onClick={data.detailsClick}>{isHover ? "Подробнее" : priceLine}</div>
      <LongStyles.Date>{formattedDate}</LongStyles.Date>
    </LongStyles.Wrapper>
  );
};
