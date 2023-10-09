import LineHead from "../MainText/LineHead";
import RightImgBlock from "../RightImg/RightImgBlock";
import style from "./style/style.module.scss";

import OraclesChallenge from "../../image/OraclesChallenge.png";
import OraclesPredictions from "../../image/OraclesPredictions.png";
import OraculText from "./OraculText";

const Oracul = () => {
  return (
    <div className={style.oracul_main}>
      <OraculText
        h2="Випробування Оракула"
        h5="Заняття для власників компендіуму"
        fistP="Оракул може бачити майбутнє за допомогою астральної магії… Не хочеться вас розчаровувати,
      але насправді астральної магії не існує. Тож якщо хочете досягти успіху в змаганнях із
      прогнозами, вам доведеться покладатися на свій гострий розум, знання кіберспорту та, перш за
      все, на свою інтуїцію."
        secondP="Зокрема, ви можете робити прогнози на те, які команди переможуть і які команди поїдуть
      додому, під час кожних вихідних турніру. Правильні припущення (тобто оракульні прозріння)
      дадуть вам очки компендіуму."
      />

      <RightImgBlock
        text="Прогнози на груповий етап"
        textP="Цього року ви вперше можете спробувати передбачити порядок команд у кожній групі."
        img={OraclesChallenge}
      />
      <RightImgBlock
        text="Внутрішньоігрові прогнози"
        textP="Під час перегляду в ігровому клієнті чи на Twitch перевіряйте свою силу передбачення до початку звуку сурми в кожному матчі. За кожен правильний прогноз (до шести на день) ви зароблятимете очки компендіуму."
        img={OraclesPredictions}
      />
      <div className={style.oracul_line}>
        <LineHead
          urlImg={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
          }
        />
      </div>
    </div>
  );
};

export default Oracul;
