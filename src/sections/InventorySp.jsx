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

function InventorySp() {
  return (
    <section
      id="inventory"
      className="inventory-section relative overflow-hidden bg-[linear-gradient(to_bottom,#111214_0%,#121317_52%,#14161a_100%)] px-5 pt-24 pb-22 md:hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
        <div className="absolute left-1/2 top-[12%] h-[240px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.014] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[160px] bg-[linear-gradient(to_top,rgba(0,0,0,0.18),rgba(0,0,0,0))]" />
      </div>

      <div className="container-shell inventory-shell relative">
        <div className="mx-auto max-w-[308px] text-center">
          <InViewReveal
            as="p"
            className="eyebrow mb-4 justify-center text-[10px] tracking-[0.22em] text-white/40"
            direction="up"
            distance={12}
            duration={1000}
            threshold={0.22}
          >
            Curated Inventory
          </InViewReveal>

          <h2 className="mx-auto max-w-[11ch] font-serif text-[32px] leading-[1.03] tracking-[-0.02em] text-[rgba(243,241,237,0.94)]">
            <InViewLines
              lines={[
                "Selected",
                "Vehicles,",
                "Presented",
                "with Authority.",
              ]}
              duration={1220}
              distance={18}
              lineDelay={90}
              threshold={0.22}
            />
          </h2>

          <InViewReveal
            as="p"
            className="mx-auto mt-7 max-w-[27ch] text-[13px] leading-[1.95] text-white/56"
            direction="up"
            distance={16}
            duration={1120}
            threshold={0.2}
          >
            VELMONT が選び抜いた車両をご紹介します。
            ただ並べるのではなく、佇まいと信頼の両方が伝わる形で、
            一台ずつ静かにご覧いただける構成にしています。
          </InViewReveal>
        </div>

        <InViewReveal
          className="mt-12 overflow-hidden"
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
              speed={860}
              grabCursor={true}
              centeredSlides={false}
              watchSlidesProgress={true}
              slidesPerView={1.08}
              spaceBetween={14}
              breakpoints={{
                0: {
                  slidesPerView: 1.08,
                  spaceBetween: 14,
                },
                420: {
                  slidesPerView: 1.1,
                  spaceBetween: 14,
                },
                560: {
                  slidesPerView: 1.14,
                  spaceBetween: 16,
                },
              }}
              className="inventory-swiper"
            >
              {cars.map((car) => (
                <SwiperSlide key={car.id} className="inventory-slide">
                  <article
                    className="
                      inventory-card group relative h-full overflow-hidden rounded-[22px]
                      border border-white/7 bg-white/[0.016]
                      shadow-[0_18px_48px_rgba(0,0,0,0.18)]
                      transition-[border-color,background-color,transform,box-shadow]
                      duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    "
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-white/10" />

                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute inset-y-0 right-0 w-[84px] bg-[linear-gradient(to_left,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
                      <div className="absolute inset-x-[16%] bottom-[-18px] h-[42px] rounded-full bg-black/18 blur-2xl" />
                    </div>

                    <div className="aspect-[16/11] overflow-hidden">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-active:scale-[1.02]"
                      />
                    </div>

                    <div className="relative px-5 py-5">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                        {car.category}
                      </p>

                      <h3 className="mt-3 font-serif text-[24px] leading-[1.06] tracking-[-0.01em] text-white/90">
                        {car.name}
                      </h3>

                      <div className="mt-5 flex items-end justify-between gap-4">
                        <p className="text-[13px] tracking-[0.05em] text-white/68">
                          {car.price}
                        </p>

                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 border-b border-white/10 pb-1 text-[11px] font-medium tracking-[0.1em] text-white/74 transition-colors duration-500 hover:text-white"
                        >
                          View Details
                          <span aria-hidden="true" className="text-white/34">
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

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="inventory-prev inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.025] text-white/62 backdrop-blur-[6px] transition-all duration-500 hover:border-white/12 hover:bg-white/[0.04] hover:text-white/84"
                  aria-label="前の車両を見る"
                >
                  ←
                </button>

                <button
                  type="button"
                  className="inventory-next inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.025] text-white/62 backdrop-blur-[6px] transition-all duration-500 hover:border-white/12 hover:bg-white/[0.04] hover:text-white/84"
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

export default InventorySp;