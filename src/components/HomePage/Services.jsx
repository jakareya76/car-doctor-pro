import Heading from "../Shared/Heading";
import { services } from "../../temp/services";
import ServiceCard from "../Cards/ServiceCard";

const Services = () => {
  return (
    <div className="py-20">
      <Heading
        title="Service"
        heading="Our Service Area"
        text="  the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable."
      />
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            return <ServiceCard key={service._id} service={service} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
