import { SegmentContentWrapper } from "./MainPage.styles";
import { CreateEmployee } from "@widgets/CreateEmployee";
import { CreateUser } from "@widgets/CreateUser/ui";
import { CreateCreditRate } from "@widgets/CreateCreditRate/ui/CreateCreditRate";
import { CreditRateList } from "@widgets/CreditRateList";
import { ISegment } from "./MainPage.interfaces";
import { EmployeeItemsList } from "@widgets/EmployeeItemsList/EmployeeItemsList";
import { UserItemsList } from "@widgets/UserItemsList";

export const segments: ISegment[] = [
  {
    label: "Сотрудники",
    title: "Сотрудники",
    key: "1",
    children: (
      <SegmentContentWrapper>
        <EmployeeItemsList />
      </SegmentContentWrapper>
    ),
    button: <CreateEmployee />,
  },
  {
    label: "Пользователи",
    title: "Пользователи",
    key: "2",
    children: (
      <SegmentContentWrapper>
        <UserItemsList />
      </SegmentContentWrapper>
    ),
    button: <CreateUser />,
  },
  {
    label: "Тарифы кредитов",
    title: "Тарифы кредитов",
    key: "3",
    children: (
      <SegmentContentWrapper>
        <CreditRateList />
      </SegmentContentWrapper>
    ),
    button: <CreateCreditRate />,
  },
];
