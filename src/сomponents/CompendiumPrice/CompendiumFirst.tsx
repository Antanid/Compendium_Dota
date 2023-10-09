import style from "./style/style.module.scss";

type CompendiumFirstProps = {
  text: string;
};

const CompendiumFirst: React.FC<CompendiumFirstProps> = ({ text }) => {
  return (
    <div className={style.compendiumPrice_img}>
      <img
        className={style.compendiumPrice_img_aegis}
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/ti_logo_color.png"
        alt="augis_img"
      />
      <p>{text}</p>
      <img
        className={style.compendiumPrice_img_star}
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/stars.png"
        alt="star_img"
      />
    </div>
  );
};

export default CompendiumFirst;
