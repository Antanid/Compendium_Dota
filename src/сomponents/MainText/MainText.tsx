import LineHead from "./LineHead";
import MainAllText from "./MainAllText";
import style from "./style/style.module.scss";

const MainText = () => {
  return (
    <div className={style.main_text}>
      <LineHead
        urlImg={
          "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider.png"
        }
      />
      <MainAllText />
      <LineHead
        urlImg={
          "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
        }
      />
    </div>
  );
};

export default MainText;
