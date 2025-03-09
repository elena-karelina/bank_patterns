import { TabsProps } from "antd";
import {
  AccountItemsListStyled,
  CreditItemsListStyled,
} from "./PersonPage.styles";
import { BlockWrapper } from "@shared/ui";

export const TEXTS = {
  title: " аккаунта ",
};

export const segments: TabsProps["items"] = [
  {
    label: "Счета",
    key: "1",
    children: (
      <BlockWrapper>
        <AccountItemsListStyled />
      </BlockWrapper>
    ),
  },
  {
    label: "Кредиты",
    key: "2",
    children: (
      <BlockWrapper>
        <CreditItemsListStyled />
      </BlockWrapper>
    ),
  },
];
