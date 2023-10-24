import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="my-10 pb-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:flex-1 relative">
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 absolute right-0 top-1/2 border-8 border-white  rounded-lg shadow-2xl"
        />
        </div>
        <div className="lg:flex-1 space-y-4 p-10 pt-0">
            <h3 className="text-3xl font-bold text-orange-500">About Us</h3>
          <h1 className="text-4xl w-1/2 font-bold">We are qualified & of experience in this field</h1>
          <p className="text-zinc-500">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="text-zinc-500">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
          </p>
          <button className="btn bg-orange-500 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
