import PhoneIcon from "@/assets/svg/PhoneIcon";
const ButtonPhone = ({ phone }) => {
  return (
    <div className="fixed bottom-5 left-10 hidden md:block z-[2000]">
      <a href={`tel:0949115014`}>
        <div className="button-phone">
          <div className="button-phone-children">
            <PhoneIcon className="w-6 h-6" fill="#eec75b" />
          </div>
          <div className="text-[20px] font-medium">{phone}</div>
        </div>
      </a>
    </div>
  );
};

export default ButtonPhone;
