import image1 from "../../assets/images/features/image1.png";
import image2 from "../../assets/images/features/image2.png";
import image3 from "../../assets/images/features/image3.png";
import image4 from "../../assets/images/features/image4.png";
import image5 from "../../assets/images/features/image5.png";
import image6 from "../../assets/images/features/image6.png";
const Feature = () => {
  return (
    <div className="text-center py-10">
      <div className="space-y-3">
      <h1 className="text-3xl font-bold text-orange-500">Core Features</h1>
      <h2 className="text-5xl font-bold ">Why Choose Us</h2>
      <p className=" w-1/2 text-zinc-500 mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomized words which do not look even slightly believable.
      </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 font-bold pt-10">
        <div className="p-6 space-y-3 border rounded-lg">
          <img
            src={image1}
            className="right-0 left-0 mx-auto"
          />{" "}
          <h3>Expert Team</h3>
        </div>
        <div className="p-6 space-y-3  rounded-lg bg-[#FF3811] text-white">
          <img
            src={image2}
            className=" right-0 left-0 mx-auto"
          />{" "}
          <h3>Timely Delivery</h3>
        </div>
        <div className="p-6 space-y-3 border rounded-lg">
          <img
            src={image3}
            className="right-0 left-0 mx-auto"
          />{" "}
          <h3>24/7 Support</h3>
        </div>
        <div className="p-6 space-y-3 border rounded-lg">
          <img
            src={image4}
            className="right-0 left-0 mx-auto"
          />{" "}
          <h3>Best Equipment</h3>
        </div>
        <div className="p-6 space-y-3 border rounded-lg">
          <img
            src={image5}
            className="right-0 left-0 mx-auto"
          />{" "}
          <h3>100% Guaranty</h3>
        </div>
        <div className="p-6 space-y-3 border rounded-lg">
          <img
            src={image6}
            className="right-0 left-0 mx-auto"
          />{" "}
          <h3>Timely Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
