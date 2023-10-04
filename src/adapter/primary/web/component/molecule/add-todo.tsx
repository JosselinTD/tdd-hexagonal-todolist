import { KeyboardEvent, useState } from "react";
import { Input } from "../atom/input";
import { Plus } from "../atom/plus";

interface AddTodoProps {
  onAdd: (value: string) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [value, setValue] = useState("");

  const onKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onAdd(value);
      setValue("");
    }
  };

  return (
    <span
      className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"
      onKeyUp={onKeyUp}
    >
      <Plus />
      <Input value={value} onChange={setValue} />
    </span>
  );
};
