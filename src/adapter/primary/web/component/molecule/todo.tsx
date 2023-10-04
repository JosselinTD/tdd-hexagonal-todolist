import { Checkbox } from "../atom/checkbox";
import { Text } from "../atom/text";

interface TodoProps {
  label: string;
  isDone: boolean;
  onClick?: () => void;
}

export const Todo = ({ label, isDone, onClick }: TodoProps) => {
  return (
    <span
      className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
      onClick={onClick}
    >
      <Checkbox checked={isDone} />
      <Text>{label}</Text>
    </span>
  );
};
