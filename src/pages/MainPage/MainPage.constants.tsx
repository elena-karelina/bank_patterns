import { TabsProps } from "antd";
import {
  AccountItemsListStyled,
  SegmentContentWrapper,
} from "./MainPage.styles";

export const TEXTS = {
  title: "Мои ",
};

export const segments: TabsProps["items"] = [
  {
    label: "Счета",
    key: "1",
    children: (
      <SegmentContentWrapper>
        <AccountItemsListStyled />
      </SegmentContentWrapper>
    ),
  },
  {
    label: "Кредиты",
    key: "2",
    children: <SegmentContentWrapper>`dd`</SegmentContentWrapper>,
  },
];
