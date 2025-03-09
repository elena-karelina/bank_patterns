import { Skeleton } from "antd";
import { FC } from "react";

export const LineShimmer: FC<{ className?: string }> = ({ className }) => {
  return (
    <Skeleton.Node
      active={true}
      style={{ width: "100%" }}
      className={className}
    />
  );
};
