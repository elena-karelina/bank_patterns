import { FC } from "react";
import { PageLayout } from "@shared/ui";
import Title from "antd/es/typography/Title";
import { useStores } from "@shared/contexts/stores";
import { observer } from "mobx-react-lite";
import { useCreditDetails } from "@pages/CreditDetailsPage/hooks";

export const CreditDetailsPage: FC = observer(() => {
  const {
    creditStore: { clickedCredit },
  } = useStores();

  const { data } = useCreditDetails(clickedCredit?.id as string);

  const deadlineTime = new Date(data?.deadlineTime as string);

  const year = deadlineTime.getFullYear();
  const month = deadlineTime.getMonth() + 1;
  const day = deadlineTime.getDate();

  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  console.log("AccountDetailsPage");

  return (
    <PageLayout title={`Информация о кредите`} withNavigationHome={true}>
      <Title level={4}>Ставка: {data?.rate.yearlyRate}%</Title>
      <Title level={4}>Осталось заплатить :</Title>
      <span>
        {data?.moneyLeftToPay} из {data?.totalMoneyToPay} до {formattedDate}
      </span>

      <Title level={4}>История операций</Title>
      {/* <TransactionHistoryStyled /> */}
    </PageLayout>
  );
});
