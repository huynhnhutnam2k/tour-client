import { CheckIcon } from "@/assets/svg";

export const Footer = ({ data }) => {
  return (
    <footer className="mt-10">
      <div className="bg-blue-secondary py-[35px]">
        <div className="container flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/3">
            <h3 className="text-[18px] text-yellow-primary mb-4">
              Airbnb Villa NovaWorld Phan Thiết
            </h3>
            <p className="text-base text-white">
              Gia đình, bạn bè sum họp 7-10 người bên nhau. Bao trọn villa riêng
              biệt, nguyên căn riêng tư thích hợp cho nhóm gia đình & bạn bè.
              Một khu phố theo phong cách Florida của Mỹ đã vận hành tại
              NovaWorld Phan Thiết, check-in cực sang, vui chơi cực đã.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col lg:items-center">
            <h3 className="text-[18px] text-yellow-primary mb-4">
              Liên kết nhanh
            </h3>
            <ul>
              {data.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-2 cursor-pointer mb-1"
                >
                  <CheckIcon className="w-6 h-6" />
                  <p className="text-base text-white">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col">
            <h3 className="text-[18px] text-yellow-primary mb-4">Liên hệ</h3>
            <p className="text-base text-white">
              <strong>Trụ sở</strong>: 65 Nguyễn Du, Bến Nghé, Q.1, TP.HCM
            </p>
            <p className="text-base text-white">
              <strong>Văn Phòng</strong>: 2Bis Nguyễn Thị Minh Khai, P.Đa Kao,
              Q.1, TP.HCM
            </p>
            <p className="text-base text-white">
              <strong>Hotline</strong>: 097 222 0000
            </p>
            <p className="text-base text-white">
              <strong>Email</strong>: novaland.tphcm@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-fourth">
        <p className="text-[#ccc] text-center text-sm py-2">
          Airbnb Villa Novaworld Phan Thiết
        </p>
      </div>
    </footer>
  );
};

export default Footer;
