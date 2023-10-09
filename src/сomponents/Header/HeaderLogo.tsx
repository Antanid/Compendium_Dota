import style from "./style/style.module.scss";

const HeaderLogo = () => {
  return (
      <div className={style.header_block_img}>
        <a href="https://www.dota2.com/home">
        <img
          className={style.header_block_img_bigImg}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
          alt="dota_logo"
        />
        <img
          className={style.header_block_img_LittleImg}
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png"
          alt="dota_logo"
        />
         </a>
      </div>
  );
};

export default HeaderLogo;
