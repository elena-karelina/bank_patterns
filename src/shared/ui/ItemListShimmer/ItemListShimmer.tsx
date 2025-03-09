import { Divider } from "@shared/ui";
import { FC } from "react";
import { ItemShimmer } from "./ItemListShimmer.styles";

export const ItemListShimmer: FC = () => {
  return (
    <>
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index}>
          <ItemShimmer />
          {index < 2 && <Divider />}
        </div>
      ))}
    </>
  );
};
