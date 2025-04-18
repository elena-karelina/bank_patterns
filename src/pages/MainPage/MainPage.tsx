import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { PageLayout } from "@shared/ui";
import { segments } from "./MainPage.constants";
import { Content, TabsStyled } from "./MainPage.styles";
import { ISegment } from "./MainPage.interfaces";
import { useGetTheme } from "@entities/Theme/hooks";
import { useStores } from "@shared/contexts/stores";

export const MainPage: FC = observer(() => {
  const {
    themeStore: { setTheme },
  } = useStores();

  const { status, data: theme } = useGetTheme();

  if (status === "success") {
    setTheme(theme);
  }

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
