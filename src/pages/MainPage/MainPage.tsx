import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { PageLayout } from "@shared/ui";
import { segments, TEXTS } from "./MainPage.constants";
import { Content, TabsStyled } from "./MainPage.styles";
import { CreateAccount } from "@widgets/CreateAccount";
import { CreateCredit } from "@widgets/CreateCredit";

export const MainPage: FC = observer(() => {
  const [segmentName, setSegmentName] = useState<string>(
    segments && segments[0].label
  );
  const onChange = (tabKey: string) => {
    const currentSegment = segments?.find(({ key }) => key === tabKey);
    setSegmentName(currentSegment?.label);
  };

  return (
    <PageLayout title={`${TEXTS.title + segmentName.toLowerCase()}`}>
      <Content>
        <TabsStyled
          defaultActiveKey="1"
          tabPosition="left"
          items={segments}
          onChange={onChange}
        />
        {segmentName.toLowerCase() === "счета" ? (
          <CreateAccount />
        ) : (
          <CreateCredit />
        )}
      </Content>
    </PageLayout>
  );
});
