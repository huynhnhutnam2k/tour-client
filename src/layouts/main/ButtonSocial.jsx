import LocationIcon from "@/assets/svg/LocationIcon";
import MessagerIcon from "@/assets/svg/MessagerIcon";
import ZaloIcon from "@/assets/svg/ZaloIcon";

const ButtonSocial = ({ facebook, zalo, address }) => {
  return (
    <div className="hidden md:flex flex-col gap-y-3 fixed bottom-10 right-10">
      <a
        href={facebook}
        target="_blank"
        className="w-[60px] h-[60px] flex items-center justify-center bg-black/30 rounded-full cursor-pointer shadow-social"
      >
        <MessagerIcon className="w-8 h-8" fill="#005be0" />
      </a>
      <a
        href={zalo}
        target="_blank"
        className="w-[60px] h-[60px] flex items-center justify-center bg-black/30 rounded-full cursor-pointer shadow-social"
      >
        <ZaloIcon className="w-8 h-8" fill="#005be0" />
      </a>
      <a
        href={address}
        target="_blank"
        className="w-[60px] h-[60px] flex items-center justify-center bg-black/30 rounded-full cursor-pointer shadow-social"
      >
        <LocationIcon className="w-8 h-8" fill="#005be0" />
      </a>
    </div>
  );
};

export default ButtonSocial;
