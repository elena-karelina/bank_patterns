import { FC } from "react";
import { BlockWrapper, PageLayout, TitleStyled } from "@shared/ui";
import { observer } from "mobx-react-lite";
import { useCreditDetails } from "@pages/CreditDetailsPage/hooks";
import {
  CreditTransactionHistoryStyled,
  MakePaymentStyled,
} from "./CreditDetailsPage.styles";
import { ItemShimmer } from "@shared/ui/ItemListShimmer/ItemListShimmer.styles";
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
      <PageLayout title={`Информация о кредите`} withNavigationHome={true}>
        <ItemShimmer />
      </PageLayout>
    );
  }
  console.log(data?.payments);

  return (
    <PageLayout title={`Информация о кредите`} withNavigationHome={true}>
      <TitleStyled level={4}>Ставка: {data?.rate.yearlyRate}%</TitleStyled>
      <TitleStyled level={4}>Осталось заплатить :</TitleStyled>
      <div>
        {data?.moneyLeftToPay} из {data?.totalMoneyToPay} до {formattedDate}
      </div>
      <MakePaymentStyled />
      <TitleStyled level={4}>История операций</TitleStyled>
      <BlockWrapper>
        <CreditTransactionHistoryStyled transactions={data?.payments} />
      </BlockWrapper>
    </PageLayout>
  );
});
