import LocationIcon from "@/assets/svg/LocationIcon"
import MessagerIcon from "@/assets/svg/MessagerIcon"
import PhoneIcon2 from "@/assets/svg/PhoneIcon2"
import ZaloIcon from "@/assets/svg/ZaloIcon"

const FooterAction = () => {
  return (
    <div className="fixed bottom-0 left-0 w-screen h-[60px] bg-gray-primary z-[2000] md:hidden">
        <div className="grid grid-cols-4 w-full h-full">
            <div className="flex items-center justify-center flex-col gap-y-1">
                <PhoneIcon2 className="w-5 h-5"/>
                <span className="font-normal text-sm">Gọi điện</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-y-1">
                <MessagerIcon className="w-5 h-5"/>
                <span className="font-normal text-sm">Messenger</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-y-1">
                <ZaloIcon className="w-5 h-5"/>
                <span className="font-normal text-sm">Zalo</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-y-1">
                <LocationIcon className="w-5 h-5"/>
                <span className="font-normal text-sm">Bản đồ</span>
            </div>
        </div>
    </div>
  )
}

export default FooterAction