import { observer } from "mobx-react-lite";
import { FC } from "react";
import meerkat from "../../../../public/logo.png";

import { MainPage } from "@pages/MainPage";
import { Image, Wrapper } from "./Page.styles";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccountDetailsPage } from "@pages/AccountDetailsPage";
import { LoginPage } from "@pages/LoginPage";
import { PersonPage } from "@pages/PersonPage";

export const Page: FC = observer(() => {
  // const {
  //   routingStore: { appStage },
  // } = useStores();
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
        <Route path="/details" element={<AccountDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Image src={meerkat} />
    </Wrapper>
  );
});
