import { Favicon } from "../atom/favicon";
import { Title } from "../atom/title";

interface TitleProps {
  label: string;
}

export const Header = ({ label }: TitleProps) => {
  return (
    <div className="flex items-center mb-6">
      <Favicon />
      <Title>{label}</Title>
    </div>
  );
};
