interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium  text-sm"
      type="text"
      placeholder="Add a new task"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
