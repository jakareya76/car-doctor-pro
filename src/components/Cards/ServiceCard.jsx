import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service || {};
  return (
    <div className="p-5 border rounded-xl">
      <Image
        src={img}
        width={300}
        height={220}
        alt={title}
        className="w-[300px] h-[220px] rounded-xl"
      />
      <h2 className="text-2xl text-gray-700 font-bold my-3">{title}</h2>
      <div className="flex items-center justify-between">
        <h4 className="text-xl text-primary font-bold">Price: ${price}</h4>
        <div className="bg-primary p-2 rounded-full cursor-pointer">
          <FaArrowRight color="white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
