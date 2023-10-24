import image1 from "../../assets/images/banner/1.jpg"
import image2 from "../../assets/images/banner/2.jpg"
import image3 from "../../assets/images/banner/3.jpg"
import image4 from "../../assets/images/banner/4.jpg"
import image5 from "../../assets/images/banner/5.jpg"
import image6 from "../../assets/images/banner/6.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} className="w-full h-[80vh] rounded-lg" />
            <div className="absolute w-1/2 space-y-5 flex flex-col justify-center  h-full  bg-gradient-to-r from-[#151515] to-[#00000000] rounded-lg px-10">
           <h3 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h3>
           <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div >
           <button className="btn btn-error mr-5">Discover More</button>
           <button className="btn btn-outline border-white text-white">Our Latest Project</button>
           </div>
          </div>
          <div className="absolute w-1/2 space-y-5 flex flex-col justify-center  h-full  bg-gradient-to-r from-[#151515] to-[#00000000] rounded-lg px-10">
           <h3 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h3>
           <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div >
           <button className="btn btn-error mr-5">Discover More</button>
           <button className="btn btn-outline border-white text-white">Our Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} className="w-full h-[80vh] rounded-lg" />
            <div className="absolute w-1/2 space-y-5 flex flex-col justify-center  h-full  bg-gradient-to-r from-[#151515] to-[#00000000] rounded-lg px-10">
           <h3 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h3>
           <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div >
           <button className="btn btn-error mr-5">Discover More</button>
           <button className="btn btn-outline border-white text-white">Our Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} className="w-full h-[80vh] rounded-lg" />
            <div className="absolute w-1/2 space-y-5 flex flex-col justify-center  h-full  bg-gradient-to-r from-[#151515] to-[#00000000] rounded-lg px-10">
           <h3 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h3>
           <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div >
           <button className="btn btn-error mr-5">Discover More</button>
           <button className="btn btn-outline border-white text-white">Our Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image4} className="w-full h-[80vh] rounded-lg" />
            <div className="absolute w-1/2 space-y-5 flex flex-col justify-center  h-full  bg-gradient-to-r from-[#151515] to-[#00000000] rounded-lg px-10">
           <h3 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h3>
           <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div >
           <button className="btn btn-error mr-5">Discover More</button>
           <button className="btn btn-outline border-white text-white">Our Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/* slider 5........ */}
        <div id="slide5" className="carousel-item relative w-full">
          <img src={image5} className="w-full h-[80vh] rounded-lg" />
            <div className="absolute w-1/2 space-y-5 flex flex-col justify-center  h-full  bg-gradient-to-r from-[#151515] to-[#00000000] rounded-lg px-10">
           <h3 className="text-6xl font-bold text-white">Affordable Price For Car Servicing</h3>
           <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div >
           <button className="btn btn-error mr-5">Discover More</button>
           <button className="btn btn-outline border-white text-white">Our Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/* slider 6......... */}
        <div id="slide6" className="carousel-item relative w-full">
          <img src={image6} className="w-full h-[80vh] rounded-lg" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;