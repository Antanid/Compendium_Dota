import LeftImgBlock from "../LeftImg/LeftImgBlock";
import LineHead from "../MainText/LineHead";
import style from "./style/style.module.scss";

import QuestChallengeMatch from '../../image/QuestChallengeMatch.png';
import QuestPlayer from '../../image/QuestPlayer.png';
import FirstText from "./FirstText";

const Quest = () => {
  return (
    <div className={style.quest_main}>
     <FirstText
     h2="Випробування Шляху до The International"
     h5="Заняття для власників компендіуму"
     p="Ви спостерігали за професійними гравцями. Ви їх підбадьорювали. А тепер зіграйте за одного з
     них. Сідайте в ігрове крісло свого улюбленого кіберспортсмена й відтворіть його найкращі
     моменти з минулого року. Виграйте за його героя в певному матчі, або за одного з п’яти
     героїв, за яких він грав упродовж певного місяця сезону. Заробляйте очки за кожне
     випробування й додаткові очки за виконання повних наборів випробувань."
     />

      <LeftImgBlock
        text="Випробування матчів"
        textP="Виграйте за героя з реального професійного матчу."
        img={QuestChallengeMatch}
      />

      <LeftImgBlock
        text="Випробування гравців"
        textP="Виграйте за одного з героїв, яких професійний гравець найчастіше обирав."
        img={QuestPlayer}
      />
<div className={style.quest_line}>
      <LineHead
        urlImg={
          "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
        }
      />
      </div>
    </div>
  );
};

export default Quest;
