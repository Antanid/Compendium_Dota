import PriceBlock from "../CompendiumPrice/PriceBlock";
import LineHead from "../MainText/LineHead";
import PriceEndMoreInfo from "./PriceEndMoreInfo";
import style from "./style/style.module.scss";

const PriceEnd = () => {
  return (
    <div className={style.price_end_main}>
      <PriceBlock />
      <PriceEndMoreInfo text="Докладніше про турнір" />
      <LineHead
        urlImg={
          "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
        }
      />
    </div>
  );
};

export default PriceEnd;
