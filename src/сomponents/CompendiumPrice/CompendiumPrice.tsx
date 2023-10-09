import LineHead from "../MainText/LineHead";
import CompendiumFirst from "./CompendiumFirst";
import CompendiumText from "./CompendiumText";
import MoreInformation from "./MoreInformation";
import PriceBlock from "./PriceBlock";
import style from "./style/style.module.scss";

const CompendiumPrice = () => {
  return (
    <div className={style.compendiumPrice}>
      <CompendiumFirst text="Компендіум" />

      <CompendiumText
        firstText="Компендіум — це ваш інтерактивний цифровий компаньйон для Шляху до The International 2023 та
       власне The International 2023."
        secondText="Грайте мов професіонал у випробуваннях Шляху до The International. Збирайте команду з
       улюблених гравців у переробленій і оновленій фентезі-грі. Перевіряйте свою інтуїцію в
       передбаченнях на груповий етап і сітку. Виграйте джекпот на нових дошках бінґо."
        thirdText="Сприймайте компендіум як місце для всіх занять, випробувань і нагород, пов’язаних із
       цьогорічною подією. Окрім цього, 25% від усіх продажів поповнюватимуть призовий фонд The
       International 2023."
      />

      <PriceBlock />

      <MoreInformation text="Докладніше про турнір" />

      <LineHead
        urlImg={
          "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
        }
      />
    </div>
  );
};

export default CompendiumPrice;
