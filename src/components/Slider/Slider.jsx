import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "../SliderItem/SliderItem";
import 'swiper/css'
import './Slider.css'
export const Slider = ({ list }) => {
    if (!list || !list.length) {
        return <p>Loading...</p>
    }


    return (
        <>
            <Swiper
                slidesPerView="auto"
                spaceBetween={15}
                scrollbar={{ draggable: true }}
                loop={false}
                breakpoints={undefined}
            >
                {list.map((item) => (
                    <SwiperSlide key={item.id}>
                        <SliderItem
                            title={item.title}
                            imageUrl={item.posterPath}
                        ></SliderItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};