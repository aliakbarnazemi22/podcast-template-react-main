import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TopPodcasts() {
  const cards = [
    {
      id: 1,
      title: "SRKP selects: good tryout tricks",
      category: "Technologoy",
      episode: "episode 9",
      imgUrl: "images/podcasts/item1.jpg",
    },
    {
      id: 2,
      title: "SRKP selects: good tryout tricks",
      category: "Technologoy",
      episode: "episode 9",
      imgUrl: "images/podcasts/item2.jpg",
    },
    {
      id: 3,
      title: "SRKP selects: good tryout tricks",
      category: "Technologoy",
      episode: "episode 9",
      imgUrl: "images/podcasts/item3.jpg",
    },
    {
      id: 4,
      title: "SRKP selects: good tryout tricks",
      category: "Technologoy",
      episode: "episode 9",
      imgUrl: "images/podcasts/item4.jpg",
    },
  ];

  return (
    <div className="w-full h-auto bg-[#F8F8F8] my-[60px] py-20">
      <div className="container mx-auto">
        <h3 className="text-center text-[50px] font-bold text-[#000]">
          Top podcasts:
        </h3>
        <p className="mt-3 text-center text-lg">
          Discover the selection of the most popular podcasts.
        </p>

        <div className="my-8 w-full">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="!flex !justify-center">
                <div className="bg-white shadow-md rounded-xl flex md:flex-row flex-col items-center justify-between !w-[95%] xl:!w-[55%]">
                  <div
                    className="rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl h-[400px] object-cover w-full md:w-[50%] bg-cover transition scale-100 md:hover:scale-[1.03] md:hover:rounded-tl-xl relative md:hover:rounded-bl-xl cursor-pointer"
                    style={{ backgroundImage: `url(${card.imgUrl})` }}
                  >
                    <div className="absolute top-3 left-3 p-3 bg-white rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-headphones font-bold"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="p-3 text-start flex flex-col justify-center items-start md:w-1/2 w-full"
                    dir="ltr"
                  >
                    <div className="text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                      <p>{card.episode}</p>
                      <div className="w-[3px] h-[3px] rounded-full bg-[#8e8b8c]"></div>
                      <p>{card.category}</p>
                    </div>
                    <a
                      href="#"
                      className="mt-1 text-2xl text-black font-bold leading-[1.5]"
                    >
                      {card.title}
                    </a>
                    <a
                      href="#"
                      className="font-lato text-black text-[15px] font-[700] gap-3 items-center h-[fit-content] flex mt-2"
                    >
                      Episode page
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-arrow-right mt-[2px]"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TopPodcasts;
