import { observer } from "mobx-react-lite";
import { FC } from "react";
import meerkat from "../../../../public/logo.png";

import { MainPage } from "@pages/MainPage";
import { Image, Wrapper } from "./Page.styles";
import { Route, Routes } from "react-router-dom";
import { AccountDetailsPage } from "@pages/AccountDetailsPage";
import { LoginPage } from "@pages/LoginPage";

export const Page: FC = observer(() => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details" element={<AccountDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Image src={meerkat} />
    </Wrapper>
  );
});
