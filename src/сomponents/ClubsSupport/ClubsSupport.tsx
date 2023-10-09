import LeftImgBlock from "../LeftImg/LeftImgBlock";
import LineHead from "../MainText/LineHead";
import style from "./style/style.module.scss";

import ClubsSupporters from "../../image/ClubsSupporters.png";
import ClubsText from "./ClubsText";

const ClubsSupport = () => {
  return (
    <div className={style.club_mainDiv}>
      <ClubsText
        textH2="Клуби підтримки"
        textH5="Безпосередньо підтримайте вашу улюблену команду"
        firstP="Нагороди клубів підтримки — мов радощі юності. Насолоджуйтеся ними, поки можете, бо вони
      швидкоплинні. Були. Відтепер вони постійні! Тож можете насолоджуватися ними вічно! Якщо
      тільки вас не зіб’є автобус."
        secondP="І навіть краще: 50% від усіх продажів іде безпосередньо команді. Ну, для команди краще. А
      постійність — краще для вас."
      />
      <LeftImgBlock
        text="Три ступені підтримки"
        textP="Обирайте бронзовий, срібний чи золотий ступінь підтримки улюблених команд, щоб отримати нагороди, створені самими командами."
        img={ClubsSupporters}
      />
      <div className={style.club_line}>
        <LineHead
          urlImg={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
          }
        />
      </div>
    </div>
  );
};

export default ClubsSupport;
