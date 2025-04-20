import { FC } from "react";
import { BlockWrapper, PageLayout } from "@shared/ui";
import Title from "antd/es/typography/Title";
import { observer } from "mobx-react-lite";
import { useCreditDetails } from "../../hooks";
import { CreditTransactionHistoryStyled } from "./CreditDetailsPage.styles";
import { ItemShimmer } from "@shared/ui";
import { useParams } from "react-router-dom";

export const CreditDetailsPage: FC = observer(() => {
  const { id } = useParams();

  const { status, data } = useCreditDetails(id as string);

  const deadlineTime = new Date(data?.deadlineTime as string);

  const year = deadlineTime.getFullYear();
  const month = deadlineTime.getMonth() + 1;
  const day = deadlineTime.getDate();

  const formattedDate = `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;

  if (status === "pending") {
    console.log(status);
    return (
      <PageLayout title={`Информация о кредите`}>
        <ItemShimmer />
      </PageLayout>
    );
  }
  console.log(data?.payments);

  return (
    <PageLayout title={`Информация о кредите`}>
      <Title level={4}>Ставка: {data?.rate.yearlyRate}%</Title>
      <Title level={4}>Осталось заплатить :</Title>
      <div>
        {data?.moneyLeftToPay} из {data?.totalMoneyToPay} до {formattedDate}
      </div>
      <Title level={4}>История операций</Title>
      <BlockWrapper>
        <CreditTransactionHistoryStyled transactions={data?.payments} />
      </BlockWrapper>
    </PageLayout>
  );
});
