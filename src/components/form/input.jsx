
const InputCustom = ({
  label,
  onChange,
  name,
  type = "text",
  value,
  onBlur,
  isError,
  errorMsg,
  placeholder = "",
  otherStyle = ''
}) => {
  return (
    <div className={`flex flex-col ${otherStyle}`}>
      <label htmlFor={name} className="mb-1 text-[17px]">{label}</label>
      <div className="">
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className="h-full w-full border border-[#eee]  rounded-md p-4 text-[17px]"
        />
      </div>
      {errorMsg && isError && <span className="text-red-500 font-bold">{errorMsg}</span>}
    </div>
  );
};

export default InputCustom;
