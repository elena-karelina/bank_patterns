import { FC } from "react";
import { Row, Wrapper, Data, Amount } from "./TransactionHistoryElement.styles";

export const TransactionHistoryElement: FC = () => {
  return (
    <Wrapper>
      <Row>
        <div>Поступление</div>
        <Amount>+223 P</Amount>
      </Row>
      <Data>23.12.24</Data>
    </Wrapper>
  );
};
