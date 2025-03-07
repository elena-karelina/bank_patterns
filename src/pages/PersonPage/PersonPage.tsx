import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { PageLayout } from "@shared/ui";
import { segments, TEXTS } from "./PersonPage.constants";
import { Content, TabsStyled } from "./PersonPage.styles";

export const PersonPage: FC = observer(() => {
  const [segmentName, setSegmentName] = useState<string>(
    segments && segments[0].label
  );
  const onChange = (tabKey: string) => {
    const currentSegment = segments?.find(({ key }) => key === tabKey);
    setSegmentName(currentSegment?.label);
  };

  return (
    <PageLayout
      title={` ${segmentName + TEXTS.title + "sds"}`}
      withNavigationHome={true}
    >
      <Content>
        <TabsStyled
          defaultActiveKey="1"
          tabPosition="left"
          items={segments}
          onChange={onChange}
        />
      </Content>
    </PageLayout>
  );
});
