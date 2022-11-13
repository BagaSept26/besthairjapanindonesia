import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

const TeamSlider = () => {
  return (
    <Carousel className="py-10 my-10 text-white bg-[#0099ff] rounded-tl-[100px] rounded-br-[100px] lg:py-20">
      <CarouselItem index={0}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center py-4">
            <img
              src="/assets/doc.jpg"
              alt="Murat"
              className="w-[120px] h-[180px] "
            />
          </div>
          <h1 className="pb-4 text-3xl">Exp. Dr. Murat SENER</h1>
          <h2 className="pb-4 text-xl">Specialist Cardiology</h2>
          <p>
            Dr. Murat Sener berkerja sebagai "Specialist Cardiology di Florence Nightingale Hospital"
          </p>
        </div>
      </CarouselItem>
      <CarouselItem index={1}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center py-4 ">
            <img
              src="/assets/team/Mark-Prichard-e1405584354538.png"
              alt=""
              className="w-[100px] h-[100px]"
            />
          </div>
          <h1 className="pb-4 text-3xl">Dr. Zahed Parvez</h1>
          <h2 className="pb-4 text-xl">Specialist Cardiology</h2>
          <p>
            
          </p>
        </div>
      </CarouselItem>
     
    </Carousel>
  );
};

export default TeamSlider;
