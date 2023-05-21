import { useSwiper } from "swiper/react";

interface Props {
  isNext: boolean;
}

const SlideButton = ({
  isNext
}: Props) => {
  const swiper = useSwiper();
  console.log("🚀 ~ file: SlideButton.tsx:11 ~ swiper:", swiper);

  return (
    <button 
      // onClick={() => isNext ? swiper?.slideNext() : swiper?.slidePrev()}
      className={isNext ? "swiper-button-next" : "swiper-button-prev"}
      style={{
        fontSize: "20px"
      }}
    >
      {isNext ? "Next" : "Prev"}
    </button>
  );
}

export default SlideButton;