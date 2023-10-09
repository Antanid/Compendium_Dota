import LeftImgBlock from "../LeftImg/LeftImgBlock";
import LineHead from "../MainText/LineHead";
import style from "./style/style.module.scss";

import TalentStickers from "../../image/TalentStickers.png";
import FirstText from "./FirstText";

const TalentsSupport = () => {
  return (
    <div className={style.talents_mainBlock}>
      <FirstText
        h2="Наліпки талантів"
        h5="Безпосередньо підтримайте вашого улюбленого таланта"
        firstP="Кіберспортивні трансляції — це важка робота. Звісно, це не видобуток вугілля. Та це важче,
      ніж в’язати щось для продажу на Etsy. Безперечно, мова не про всі в’язання. Деякі з тих
      різнобарвних светрів виглядають досить складними."
        secondP="Тепер ви можете надіслати таке повідомлення своєму улюбленому таланту: «Агов… Поважаю вас за
      те, що робите. Не так сильно, як шахтаря, але більше ніж 50% творців з Etsy». І раз мова
      зайшла про 50%, то саме половина всіх прибутків із продажу наліпок талантів ітиме
      безпосередньо талантам."
      />
      <LeftImgBlock
        text="Оберіть свій ступінь"
        textP="Купуйте комплекти нагород зі своїм улюбленим талантом. Комплекти містять набір наліпок, голосових фраз і автографів, залежно від ступеня придбаного комплекту."
        img={TalentStickers}
      />

      <div className={style.talents_coming_soon}>
        <h3>Незабаром</h3>
        <p>Комплекти талантів будуть доступні для придбання після оголошення списку талантів.</p>
      </div>

      <div className={style.talents_line}>
        <LineHead
          urlImg={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
          }
        />
      </div>
    </div>
  );
};

export default TalentsSupport;
