import image1 from "../../assets/images/location/image1.png";
import image2 from "../../assets/images/Location/image2.png";
import image3 from "../../assets/images/Location/image3.png";

const Location = () => {
  return (
    <div className="bg-black rounded-lg text-white flex justify-evenly py-20 my-20">
      <div className=" flex gap-3 ">
        <img
          src={image1}
          alt=""
        />
        <div>
          <h5>We are open monday-friday</h5>
          <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className=" flex gap-3">
        <img
          src={image2}
          alt=""
        />
        <div>
          <h5>Have a question?</h5>
          <p className="text-2xl font-bold">+2546 251 2658</p>
        </div>
      </div>
      <div className=" flex gap-3">
        <img
          src={image3}
          alt=""
        />
        <div>
          <h5>Need a repair? our address</h5>
          <p className="text-2xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
