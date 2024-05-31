export const CheckIcon = ({ className = "", fill = "#fec85c" }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M17 9L9.99998 16L6.99994 13"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CheckIcon;
