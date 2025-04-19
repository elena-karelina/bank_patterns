import { CreateAccount } from "@features/CreateAccount/ui";
import { ISegment } from "./MainPage.interfaces";
import { AccountListPageStyled, CreditPageStyled } from "./MainPage.styles";
import { CreateCredit } from "@features/CreateCredit/ui";
import { CreditCalculation } from "@features/CreditCalculation";
import { BlockWrapper } from "@shared/ui";

export const segments: ISegment[] = [
  {
    label: "Счета",
    title: "Мои счета",
    key: "1",
    children: (
      <BlockWrapper>
        <AccountListPageStyled />
      </BlockWrapper>
    ),
    button: <CreateAccount />,
  },
  {
    label: "Кредиты",
    title: "Мои кредиты",
    key: "2",
    children: (
      <BlockWrapper>
        <CreditPageStyled />
      </BlockWrapper>
    ),
    button: <CreateCredit />,
  },
  {
    label: "Тарифы кредитов",
    title: "Тарифы кредитов",
    key: "3",
    children: (
      <BlockWrapper>
        <CreditCalculation />
      </BlockWrapper>
    ),
  },
];
