import { useSwiperSlide } from "swiper/react";

interface Props {
  index: number;
}

const Card = ({ index }: Props) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div
      style={{
        width: "500px",
        height: "100px",
        backgroundColor: swiperSlide.isActive ? "blue" : "green",
        opacity: swiperSlide.isActive ? 1 : 0.5,
        fontSize: "32px",
        filter: swiperSlide.isActive ?  "" : "drop-shadow(0px 0px 10px #757575)",
        margin: "20px",
        outline: swiperSlide.isActive ? "4px solid #F9D679" : "",
        outlineOffset: "4px"
      }}
    >
      {index}
    </div>
  );
};

export default Card;