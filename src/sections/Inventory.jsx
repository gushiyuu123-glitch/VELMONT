import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./inventory-swiper.css";

const cars = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    category: "Flagship Sedan",
    price: "¥12,800,000",
    image: "/images/car1.png",
  },
  {
    id: 2,
    name: "BMW 7 Series",
    category: "Executive Sedan",
    price: "¥10,900,000",
    image: "/images/car4.png",
  },
  {
    id: 3,
    name: "Audi Q8",
    category: "Luxury SUV",
    price: "¥9,600,000",
    image: "/images/car5.png",
  },
];

function Inventory() {
  return (
    <section
      id="inventory"
      className="inventory-section relative overflow-hidden bg-[#111214] px-5 pt-32 pb-32 sm:px-6 md:pt-36 md:pb-36 lg:pt-40 lg:pb-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
        <div className="absolute left-1/2 top-[14%] h-[360px] w-[780px] -translate-x-1/2 rounded-full bg-white/[0.018] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(to_top,rgba(0,0,0,0.22),rgba(0,0,0,0))]" />
      </div>

      <div className="container-shell inventory-shell relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end lg:gap-10 xl:gap-12">
          <InViewReveal
            as="div"
            className="max-w-[28ch] lg:pt-8"
            direction="up"
            distance={16}
            duration={1150}
            threshold={0.22}
          >
            <p className="text-[13px] leading-7 tracking-[0.04em] text-white/50 sm:text-[14px] lg:whitespace-nowrap">
              VELMONT が選び抜いた車両をご紹介します。
            </p>
          </InViewReveal>

          <div className="max-w-[700px] lg:justify-self-end lg:pt-12">
            <InViewReveal
              as="p"
              className="eyebrow mb-4 lg:text-right"
              direction="left"
              distance={14}
              duration={1000}
              threshold={0.22}
            >
              Curated Inventory
            </InViewReveal>

            <h2 className="max-w-[10.2ch] font-serif text-[44px] leading-[0.92] tracking-[-0.03em] text-velmont-stone sm:text-[54px] lg:ml-auto lg:text-right lg:text-[72px]">
              <InViewLines
                lines={["Selected Vehicles,", "Presented with Authority."]}
                duration={1260}
                distance={20}
                lineDelay={95}
                threshold={0.22}
              />
            </h2>
          </div>
        </div>

        <InViewReveal
          className="mt-18 overflow-hidden md:mt-20 lg:mt-24"
          direction="up"
          distance={14}
          duration={1100}
          threshold={0.12}
        >
          <div className="inventory-swiper-wrap">
            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              navigation={{
                prevEl: ".inventory-prev",
                nextEl: ".inventory-next",
              }}
              pagination={{
                el: ".inventory-pagination",
                clickable: true,
              }}
              keyboard={{ enabled: true }}
              loop={false}
              speed={940}
              grabCursor={true}
              centeredSlides={false}
              watchSlidesProgress={true}
              spaceBetween={18}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 14,
                },
                640: {
                  slidesPerView: 1.04,
                  spaceBetween: 16,
                },
                900: {
                  slidesPerView: 1.26,
                  spaceBetween: 18,
                },
                1200: {
                  slidesPerView: 1.56,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 1.72,
                  spaceBetween: 22,
                },
              }}
              className="inventory-swiper"
            >
              {cars.map((car) => (
                <SwiperSlide key={car.id} className="inventory-slide">
                  <article
                    className="
                      inventory-card group relative h-full overflow-hidden rounded-[18px]
                      border border-white/8 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]
                      shadow-[0_26px_72px_rgba(0,0,0,0.24)]
                      transition-[border-color,background-color,transform,box-shadow]
                      duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                      hover:-translate-y-[3px]
                      hover:border-white/14 hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.018))]
                      hover:shadow-[0_38px_96px_rgba(0,0,0,0.32)]
                    "
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-white/14" />

                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute inset-y-0 right-0 w-[120px] bg-[linear-gradient(to_left,rgba(255,255,255,0.028),rgba(255,255,255,0))]" />
                      <div className="absolute inset-x-[12%] bottom-[-22px] h-[54px] rounded-full bg-black/24 blur-2xl" />
                    </div>

                    <div className="aspect-[16/11] overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.038]"
                      />
                    </div>

                    <div className="relative px-5 py-5 sm:px-6 sm:py-6">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/36">
                        {car.category}
                      </p>

                      <h3 className="mt-3 font-serif text-[26px] leading-[1.02] text-white/92 sm:text-[30px]">
                        {car.name}
                      </h3>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <p className="text-[14px] tracking-[0.06em] text-white/72">
                          {car.price}
                        </p>

                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 border-b border-white/12 pb-1 text-[12px] font-medium tracking-[0.1em] text-white/84 transition-colors duration-500 hover:text-white"
                        >
                          View Details
                          <span aria-hidden="true" className="text-white/42">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="inventory-controls mt-9 flex items-center justify-between gap-4">
              <div className="inventory-pagination flex min-h-[12px] items-center gap-2" />

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inventory-prev inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-white/10 bg-white/[0.03] text-white/76 transition-all duration-500 hover:border-white/16 hover:bg-white/[0.06] hover:text-white"
                  aria-label="前の車両を見る"
                >
                  ←
                </button>

                <button
                  type="button"
                  className="inventory-next inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-white/10 bg-white/[0.03] text-white/76 transition-all duration-500 hover:border-white/16 hover:bg-white/[0.06] hover:text-white"
                  aria-label="次の車両を見る"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </InViewReveal>
      </div>
    </section>
  );
}

export default Inventory;