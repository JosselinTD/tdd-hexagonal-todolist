interface CheckboxProps {
  checked: boolean;
}

const checkStyle = {
  backgroundColor: "#10b981",
  borderColor: "#10b981",
  color: "#fff",
};

export const Checkbox = ({ checked }: CheckboxProps) => {
  return (
    <>
      <span
        className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full"
        style={checked ? checkStyle : undefined}
      >
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </>
  );
};
