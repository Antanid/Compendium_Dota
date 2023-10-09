import style from "./style/style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Arrow from "./Arrow";

const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
      };
  return (
    <div className={style.profile_sliderVideo}>
      <h2>Зразки вітрин</h2>

      <div className={style.profile_carouselVideo}>
        <Slider {...settings} nextArrow={<Arrow type="next" />} prevArrow={<Arrow type="prev" />}>
          <video className={style.profile_carouselVideo_item} muted autoPlay loop>
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/international2023/showcase_ti.webm"
            ></source>
          </video>

          <video className={style.profile_carouselVideo_item} muted autoPlay loop>
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/international2023/showcase_windranger.webm"
            ></source>
          </video>

          <video className={style.profile_carouselVideo_item} muted autoPlay loop>
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/international2023/showcase_pro_team.webm"
            ></source>
          </video>

          <video className={style.profile_carouselVideo_item} muted autoPlay>
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/international2023/showcase_stickers.webm"
            ></source>
          </video>

          <video className={style.profile_carouselVideo_item} muted autoPlay>
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/international2023/showcase_sniper.webm"
            ></source>
          </video>

          <video className={style.profile_carouselVideo_item} muted autoPlay>
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/international2023/showcase_cliff.webm"
            ></source>
          </video>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComp;
