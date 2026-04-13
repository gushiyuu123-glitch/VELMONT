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
      className="inventory-section relative overflow-hidden bg-[#111214] px-5 pt-28 pb-28 sm:px-6 md:pt-32 md:pb-32 lg:pt-36 lg:pb-36"
    >
      {/* subtle atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
        <div className="absolute left-1/2 top-[15%] h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="container-shell inventory-shell relative">
 <div className="grid gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-end lg:gap-8 xl:gap-10">
  {/* left: body */}
<InViewReveal
  as="div"
  className="max-w-[32ch] lg:pt-6"
  direction="up"
  distance={16}
  duration={1150}
  threshold={0.22}
>
<p className="text-[14px] leading-7 text-white/54 sm:text-[15px] sm:leading-8 lg:whitespace-nowrap">
  VELMONT が静かな基準で選び抜いた車両をご紹介します。
</p>
</InViewReveal>
  {/* right: title */}
  <div className="max-w-[680px] lg:justify-self-end lg:pt-10">
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

    <h2 className="max-w-[10.6ch] font-serif text-[42px] leading-[0.96] tracking-[-0.022em] text-velmont-stone sm:text-[50px] lg:ml-auto lg:text-right lg:text-[62px]">
      <InViewLines
        lines={["Selected Vehicles,", "Presented with Clarity."]}
        duration={1240}
        distance={20}
        lineDelay={95}
        threshold={0.22}
      />
    </h2>
  </div>
</div>

        {/* swiper */}
        <InViewReveal
          className="mt-16 overflow-hidden md:mt-18 lg:mt-20"
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
              speed={900}
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
                  slidesPerView: 1.06,
                  spaceBetween: 16,
                },
                900: {
                  slidesPerView: 1.32,
                  spaceBetween: 18,
                },
                1200: {
                  slidesPerView: 1.66,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 1.86,
                  spaceBetween: 22,
                },
              }}
              className="inventory-swiper"
            >
              {cars.map((car) => (
                <SwiperSlide key={car.id} className="inventory-slide">
                  <article
                    className="
                      inventory-card group relative h-full overflow-hidden rounded-[28px]
                      border border-white/8 bg-white/[0.03]
                      shadow-[0_20px_52px_rgba(0,0,0,0.18)]
                      transition-[border-color,background-color,transform,box-shadow]
                      duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                      hover:-translate-y-[2px]
                      hover:border-white/12 hover:bg-white/[0.04]
                      hover:shadow-[0_30px_74px_rgba(0,0,0,0.24)]
                    "
                  >
                    {/* top highlight */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-white/12" />

                    {/* subtle depth */}
                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute inset-y-0 right-0 w-[100px] bg-[linear-gradient(to_left,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
                      <div className="absolute inset-x-[14%] bottom-[-18px] h-[48px] rounded-full bg-black/18 blur-2xl" />
                    </div>

                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-full w-full object-cover object-center transition-transform duration-[1750ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.034]"
                      />
                    </div>

                    <div className="relative px-5 py-5 sm:px-6 sm:py-6">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                        {car.category}
                      </p>

                      <h3 className="mt-2 font-serif text-[25px] leading-tight text-white/92 sm:text-[28px]">
                        {car.name}
                      </h3>

                      <div className="mt-5 flex items-center justify-between gap-4">
                        <p className="text-[14px] tracking-[0.04em] text-white/70">
                          {car.price}
                        </p>

                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.08em] text-white/82 transition-colors duration-500 hover:text-white"
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

            <div className="inventory-controls mt-8 flex items-center justify-between gap-4">
              <div className="inventory-pagination flex min-h-[12px] items-center gap-2" />

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inventory-prev inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/76 transition-all duration-500 hover:border-white/16 hover:bg-white/[0.06] hover:text-white"
                  aria-label="前の車両を見る"
                >
                  ←
                </button>

                <button
                  type="button"
                  className="inventory-next inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/76 transition-all duration-500 hover:border-white/16 hover:bg-white/[0.06] hover:text-white"
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