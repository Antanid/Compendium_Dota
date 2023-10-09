import style from "./style/style.module.scss";

const FooterImg = () => {
  return (
    <div className={style.footer_main_img}>
      <a href="https://www.valvesoftware.com/en/about">
        <img
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
          alt="valve_img"
        />
      </a>
      <a href="https://www.dota2.com/home">
        <img
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
          alt="dota_img"
        />
      </a>
    </div>
  );
};

export default FooterImg;
