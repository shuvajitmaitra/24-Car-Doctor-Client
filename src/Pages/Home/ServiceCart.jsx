import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const {_id, img, title, price } = service;
  return (
    <div className="p-5 border rounded-lg text-start space-y-3 ">
      <img
        src={img}
        className="rounded-lg h-56 w-full"
      />
      <h2 className="font-bold">{title}</h2>
      <div className="flex justify-between font-bold text-[#FF3811]">
        <p>Price: {price}</p>
        <Link to={`/checkout/${_id}`}>
          <BsArrowRight className="text-2xl"></BsArrowRight>
        </Link>
      </div>
    </div>
  );
};

ServiceCart.propTypes = {
  service: PropTypes.object,
};

export default ServiceCart;
