"use client";
import Image from "next/image";
import RideForm from "@/components/rideForm";
import SuccessAlert from "../Common/SuccessAlert";
import ErrorAlert from "../Common/ErrorAlert";
import { useState, useEffect } from "react";
import Carousel from '../Common/Carousel';

const HeroSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleResult = (result) => {
    if (result) {
      if (result == "true") {
        setIsSuccess(true);
      } else if (result == "false") {
        setIsError(true);
      }
    }
  };
interface CarouselProps {
  images: string[];
}
  const images = [
    '/images/about/hero1.jpg',
    '/images/about/IMG_0008.jpeg',
    '/images/about/hero2.jpg',
    '/images/about/IMG_0014.jpeg',
    '/images/about/hero3.jpg',
    '/images/about/IMG_0015.jpeg',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSuccess(false);
      setIsError(false);
    }, 3000);

    return () => clearTimeout(timeoutId); 
  }, [isSuccess, isError]);

  return (
    <section itemScope  className="bg-white pb-12 pt-24 md:pb-14 md:pt-28 lg:pb-14 lg:pt-32">
      {isSuccess && <SuccessAlert />}
      {isError && <ErrorAlert />}
      <div className="container bg-white ">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className={`flex w-full justify-center bg-white lg:w-1/2`}>
            <div
              className={`mb-12 aspect-[25/24] w-full  rounded-sm bg-dark px-2 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] `}
            >
              <div className="">
                <RideForm onResult={handleResult} />
              </div>
            </div>
          </div>
          <div className={`flex w-full justify-center px-4 lg:w-1/2`}>
            <div
              className="relative h-[30rem]  w-5/6  rounded-sm  "
              data-wow-delay=".15s"
            >
              <div>
                {/* <Image
                  src="/images/about/hero.jpeg"
                  alt="Business transporation service"
                  fill
                  className="rounded-sm drop-shadow-three"
                /> */}

<Carousel images={images} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
