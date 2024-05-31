const ButtonCustom = ({ title, onClick = () => {} }) => {
  return (
    <button
      className="py-2 px-3 flex justify-center items-center text-white bg-blue-secondary hover:bg-yellow-500 hover:text-black duration-200 rounded text-sm"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonCustom;
