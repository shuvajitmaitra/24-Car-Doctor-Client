import { useEffect, useState } from "react";
import ServiceCart from "./serviceCart";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-[#FF3811]">Service</h1>
      <h2 className="text-5xl font-bold ">Our Service Area</h2>
      <p className=" w-1/2 text-zinc-500 mx-auto">
        the majority have suffered alteration in some form, by injected humour,
        or randomized words which do not look even slightly believable.{" "}
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
