import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { A11y, Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperNavButtons } from "./SwiperNavButtons";


const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("/teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  console.log(window);
  return (
    <div >
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold text-[#FF3811]">Team</h1>
        <h2 className="text-5xl font-bold ">Meet Our Team</h2>
        <p className=" w-1/2 text-zinc-500 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="relative pt-10">
          <Swiper
          
            modules={[Navigation, Pagination, A11y]}
            
            // navigation={{ clickable: true }}
            // navigation
            spaceBetween={50}
            slidesPerView={3}
            
          >
        {teams.map((team) => (
            <SwiperSlide   key={team.id}>
              <div className="p-5 border rounded-lg text-center space-y-2">
                <img
                  src={team.image}
                  className="rounded-lg h-56 w-full"
                />
                <h2 className="font-bold">{team.name}</h2>
                <p> {team.job_title}</p>
                <div className="flex justify-center gap-6 font-bold text-[#FF3811]">
                  <BsFacebook className="text-2xl"></BsFacebook>
                  <BsLinkedin className="text-2xl"></BsLinkedin>
                  <BsTwitter className="text-2xl"></BsTwitter>
                  <BsInstagram className="text-2xl"></BsInstagram>
                </div>
              </div>
            </SwiperSlide>
        ))}
        <div  className="absolute top-1/2 z-50 right-0 left-0" >

        <SwiperNavButtons></SwiperNavButtons>
        </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Teams;
