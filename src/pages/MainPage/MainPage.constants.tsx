import { CreateAccount } from "@widgets/CreateAccount/ui";
import { ISegment } from "./MainPage.interfaces";
import {
  AccountItemsListStyled,
  CreditItemsListStyled,
  SegmentContentWrapper,
} from "./MainPage.styles";
import { CreateCredit } from "@widgets/CreateCredit/ui";
import { CreditCalculation } from "@features/CreditCalculation";

export const segments: ISegment[] = [
  {
    label: "Счета",
    title: "Мои счета",
    key: "1",
    children: (
      <SegmentContentWrapper>
        <AccountItemsListStyled />
      </SegmentContentWrapper>
    ),
    button: <CreateAccount />,
  },
  {
    label: "Кредиты",
    title: "Мои кредиты",
    key: "2",
    children: (
      <SegmentContentWrapper>
        <CreditItemsListStyled />
      </SegmentContentWrapper>
    ),
    button: <CreateCredit />,
  },
  {
    label: "Тарифы кредитов",
    title: "Тарифы кредитов",
    key: "3",
    children: (
      <SegmentContentWrapper>
        <CreditCalculation />
      </SegmentContentWrapper>
    ),
  },
];
