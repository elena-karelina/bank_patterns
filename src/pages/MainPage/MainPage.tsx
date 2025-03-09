import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { PageLayout } from "@shared/ui";
import { segments } from "./MainPage.constants";
import { Content, TabsStyled } from "./MainPage.styles";
import { ISegment } from "./MainPage.interfaces";

export const MainPage: FC = observer(() => {
  const [segment, setSegment] = useState<ISegment>(segments[0]);

  const onChange = (tabKey: string) => {
    const currentSegment = segments?.find(({ key }) => key === tabKey);

    if (currentSegment) {
      setSegment(currentSegment);
    }
  };

  return (
    <PageLayout title={segment.title}>
      <Content>
        <TabsStyled
          defaultActiveKey="1"
          tabPosition="left"
          items={segments}
          onChange={onChange}
        />
        {segment.button}
      </Content>
    </PageLayout>
  );
});
