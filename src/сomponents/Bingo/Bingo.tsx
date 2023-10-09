import LeftImgBlock from "../LeftImg/LeftImgBlock";
import LineHead from "../MainText/LineHead";
import style from "./style/style.module.scss";

import BingoCard from "../../image/BingoCard.png";
import BingoReward from "../../image/BingoReward.png";
import BingoText from "./BingoText";

const Bingo = () => {
  return (
    <div className={style.bingo_main}>
      <BingoText
        textH2="Бінґо"
        textH5="Заняття для власників компендіуму"
        firstP="Відчуваєте захват щоразу, коли професійна команда купує Божественну рапіру? Чи коли матч
       триває понад 80 хвилин і все стає дещо дивним? А якщо команда з 16 ногами бореться проти
       команди лише з чотирма?"
        secondP="Що ж, настав час нажитися на цьому. Бінґо дозволить вам отримати вигоду з деяких зовсім
        божевільних подій."
      />

      <LeftImgBlock
        text="ОДНА КАРТКА БІНҐО НА ВИХІДНІ"
        textP="Усі власники компендіуму отримуватимуть одну випадково згенеровану картку бінґо на кожні вихідні впродовж турніру. Ця картка заповнена квадратами з дивними умовами й цікавими ситуаціями, за якими ви можете стежити, поки професійні гравці змагаються."
        img={BingoCard}
      />

      <LeftImgBlock
        text="Завершуйте ряди, отримуйте очки"
        textP="Саме так — не дозволяйте богам, демонам і нахабним лісовим створінням обдурити вас, це все ще бінґо. Заповнивши повний рядок, стовпчик або діагональ на своїй картці бінґо, ви отримаєте нагороду очками компендіуму. Примітка: вигукувати «БІНҐО» не обов’язково, але бажано."
        img={BingoReward}
      />
      <div className={style.bingo_line}>
        <LineHead
          urlImg={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
          }
        />
      </div>
    </div>
  );
};

export default Bingo;
