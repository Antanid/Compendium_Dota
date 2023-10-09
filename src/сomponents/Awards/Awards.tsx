import { useState } from "react";
import LeftImgBlock from "../LeftImg/LeftImgBlock";
import style from "./style/style.module.scss";

import AwardsCraft from "../../image/AwardsCraft.png";
import AwardsTeleports from "../../image/AwardsTeleports.png";
import AwardsScreens from "../../image/AwardsScreens.png";
import AwardsLevels from "../../image/AwardsLevels.png";
import AwardsBoost from "../../image/AwardsBoost.png";

import LineHead from "../MainText/LineHead";
import MainText from "./MainText";
import SecondText from "./SecondText";
import AwardsBonus from "./AwardsBonus";
import AwardsLevel from "./AwardsLevel";

const Awards = () => {
  const [awardsList] = useState([
    {
      text: "Фізична копія Еґіди",
      textP:
        "Зменшена вп’ятеро нікелева репродукція легендарного чемпіонського трофея. Показуйте її з гордістю! Показуйте її без зобов’язань! Розплавте її і зробіть із неї власну валюту!",
      img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//international2023/ti2023_rewards_aegis.png",
    },
    {
      text: "Постійні колеса чату",
      textP:
        "На відміну від попередніх років, тепер усі фрази колеса чату постійні. Як і пишеться в заголовку. Так, цей текст видається трохи зайвим. Але приємно провести з вами додатковий час.",
      img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//international2023/ti2023_team_player_stickers.png",
    },
    {
      text: "Наліпки гравців і команд",
      textP:
        "«Тільки командні наліпки»? Навіть не читали назву, еге ж? Тепер ви отримаєте ще й наліпки для гравців. Чесно кажучи",
      img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//international2023/ti2023_team_player_stickers.png",
    },
    {
      text: "Інтерфейс The International 2023",
      textP:
        "Попередній абзац міг відлякати від читання цього. Та якщо ви продовжили, то вчинили розумно. Це був іспит, і ви його пройшли. Бо ось інформація, яку не включено в заголовок: новий стиль інтерфейсу спеціально розроблено з використанням цьогорічної теми вітражів.",
      img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//international2023/ti2023_rewards_hud.png",
    },
  ]);
  const [awardsBonus] = useState([
    {
      text: "Підсилення для фентезі-ліги й Шляху до TI",
      secondText:
        "Використовуйте спеціальні інструменти для створення кращих гравців у фентезі-змаганні, або ж для складних випробувань Шляху до The International.",
      img: AwardsCraft,
    },
    {
      text: "Ефекти телепортації улюбленої команди",
      secondText:
        "Покажіть свою улюблену команду в грі за допомогою нестандартних ефектів телепортації, що мають три різні рівні.",
      img: AwardsTeleports,
    },
    {
      text: "Заставки",
      secondText:
        "Ви отримаєте нестандартну вітражну заставку для кожної команди, а також деякі ключові зображення цьогорічного TI.",
      img: AwardsScreens,
    },
  ]);
  return (
    <div className={style.awards_main}>
      <MainText
        textH2="Нагороди компендіуму"
        textP=" Якщо ви шанувальник змагальної Dota й полюбляєте отримувати нагороди за це, то цьогорічні
      нагороди саме для вас. Компендіум 2023 року цілковито зосереджений на The International 2023
      і професійній сцені Dota."
      />
      <SecondText
        TextH5="Типи нагород"
        TextP="Кожен тип нагороди має власний лічильник поступу. Коли лічильник заповнюється, ви можете
     забрати нагороду. Деякі лічильники можуть заповнюватися скільки завгодно разів, а деякі
     мають обмеження на кількість.
   </p>"
      />
      {awardsList.map((i) => (
        <LeftImgBlock key={i.text} text={i.text} textP={i.textP} img={i.img} />
      ))}

      <AwardsBonus awardsBonus={awardsBonus} />

      <AwardsLevel
        AwardsLevelsImg={AwardsLevels}
        AwardsBoostImg={AwardsBoost}
        firstH5="Рівні компендіуму"
        firstP="Заробляйте рівні компендіуму участю в активностях компендіуму або купуючи набори рівнів. Застосовуйте рівні для збільшення лічильників поступу ВСІХ типів нагород."
        secondH5="Посилювачі"
        secondP="Посилювачі — це ніби рівні компендіуму, але для збільшення лічильника однієї нагороди.
         Застосування посилювача до нагороди також збільшує поступ до колекційної Еґіди."
      />

      <div className={style.awards_line}>
        <LineHead
          urlImg={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
          }
        />
      </div>
    </div>
  );
};

export default Awards;
