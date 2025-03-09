import { CreateEmployee } from "@features/CreateEmployee";
import { CreateUser } from "@widgets/CreateUser/ui";
import { CreateCreditRate } from "@features/CreateCreditRate";
import { CreditRateList } from "@widgets/CreditRateList";
import { ISegment } from "./MainPage.interfaces";
import { EmployeeItemsList } from "@widgets/EmployeeItemsList";
import { UserItemsList } from "@widgets/UserItemsList";
import { BlockWrapper } from "@shared/ui";

export const segments: ISegment[] = [
  {
    label: "Сотрудники",
    title: "Сотрудники",
    key: "1",
    children: (
      <BlockWrapper>
        <EmployeeItemsList />
      </BlockWrapper>
    ),
    button: <CreateEmployee />,
  },
  {
    label: "Пользователи",
    title: "Пользователи",
    key: "2",
    children: (
      <BlockWrapper>
        <UserItemsList />
      </BlockWrapper>
    ),
    button: <CreateUser />,
  },
  {
    label: "Тарифы кредитов",
    title: "Тарифы кредитов",
    key: "3",
    children: (
      <BlockWrapper>
        <CreditRateList />
      </BlockWrapper>
    ),
    button: <CreateCreditRate />,
  },
];
