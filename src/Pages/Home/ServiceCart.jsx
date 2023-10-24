import PropTypes from "prop-types"
import {BsArrowRight} from "react-icons/bs"


const ServiceCart = ({service}) => {
    const {img, title, price } = service
    return (
        <div className="p-5 bg-gray-300 rounded-lg text-start space-y-3">
            <img src={img} className="rounded-lg h-56 w-full" />
            <h2 className="font-bold">{title}</h2>
            <div className="flex justify-between font-boldtext-[#FF3811]">
                <p>Price: {price}</p>
                <BsArrowRight className="text-2xl"></BsArrowRight>
            </div>
        </div>
    );
};

ServiceCart.propTypes = {
    service: PropTypes.object
}

export default ServiceCart;