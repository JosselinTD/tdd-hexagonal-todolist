import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => {
  return <h4 className="font-semibold ml-3 text-lg">{children}</h4>;
};
