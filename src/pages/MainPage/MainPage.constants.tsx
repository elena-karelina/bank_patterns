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
    label: "Сотрудники",
    key: "1",
    children: (
      <SegmentContentWrapper>
        <AccountItemsListStyled />
      </SegmentContentWrapper>
    ),
  },
  {
    label: "Пользователи",
    key: "2",
    children: <SegmentContentWrapper>`dd`</SegmentContentWrapper>,
  },
  {
    label: "Тарифы кредитов",
    key: "3",
    children: <SegmentContentWrapper>`dd`</SegmentContentWrapper>,
  },
];
