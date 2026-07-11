import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import MaxWidthContent from "./MaxWidthContent";

import { SidebarClose } from "lucide-react";

const Menu = ({
  location,
}: {
  location: "fernie" | "nelson" | "castlegar";
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let menuImageArr = [];

  if (location === "nelson") {
    menuImageArr = [
      "/sushiwood/nelson-menu/nelson-menu-1.webp",
      "/sushiwood/nelson-menu/nelson-menu-2.webp",
      "/sushiwood/nelson-menu/nelson-menu-3.webp",
      "/sushiwood/nelson-menu/nelson-menu-4.webp",
    ];
  } else if (location === "castlegar") {
    menuImageArr = ["/sushiwood/castlegar-menu/comming-soon.jpg"];
  } else {
    menuImageArr = [
      "/sushiwood/fernie-menu/food-menu/menu-0.webp",
      "/sushiwood/fernie-menu/food-menu/menu-1.webp",
      "/sushiwood/fernie-menu/food-menu/menu-2.webp",
      "/sushiwood/fernie-menu/food-menu/menu-3.webp",
      "/sushiwood/fernie-menu/food-menu/menu-4.webp",
      "/sushiwood/fernie-menu/food-menu/menu-5.webp",
      "/sushiwood/fernie-menu/food-menu/menu-6.webp",
      "/sushiwood/fernie-menu/food-menu/menu-7.webp",
      "/sushiwood/fernie-menu/food-menu/menu-8.webp",
    ];
  }

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <MaxWidthContent className="flex items-center justify-center flex-col gap-10 px-4 md:px-14">
      <div id="menu" className="relative w-full text-center">
        <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
        <h2 className="text-3xl z-10 font-brandon-text uppercase tracking-wide w-40 md:w-fit md:bg-black md:px-8 mx-auto">
          {location} Menu
        </h2>
      </div>

      {/* Button to open the modal on mobile */}
      <div className="block md:hidden mt-4">
        <button
          onClick={handleModalToggle}
          className="px-4 py-2 bg-white text-black rounded-md"
        >
          Open Menu
        </button>
      </div>

      {/* Swiper carousel */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {menuImageArr.map((el, index) => (
          <SwiperSlide key={index} className="relative max-w-xl">
            <img
              src={`${el}`}
              alt={"menu"}
              height={3300}
              width={2550}
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={handleModalToggle} // Close modal when clicking outside the content area
        >
          <div
            className="relative w-full h-full p-4 pt-16" // Add pt-16 to move the images down
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the content
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {menuImageArr.map((el, index) => (
                <SwiperSlide key={index} className="relative w-full">
                  <img
                    src={`${el}`}
                    alt={"menu"}
                    height={3300}
                    width={2550}
                    style={{ objectFit: "cover" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="absolute top-4 right-4 text-white text-2xl flex items-center"
              onClick={handleModalToggle} // Close the modal when clicked
            >
              <span className="mr-2">Close</span>{" "}
              {/* Add margin-right to space it from the icon */}
              <SidebarClose />{" "}
              {/* Assuming this is an icon or component for closing */}
            </button>
          </div>
        </div>
      )}
    </MaxWidthContent>
  );
};

export default Menu;
