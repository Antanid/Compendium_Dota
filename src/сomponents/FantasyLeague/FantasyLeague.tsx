import style from "./style/style.module.scss";

import FantasyDraft from "../../image/FantasyDraft.png";
import FantasyCraftUi from "../../image/FantasyCraftUi.png";
import FantasyReward from "../../image/FantasyReward.png";

import LineHead from "../MainText/LineHead";
import RightImgBlock from "../RightImg/RightImgBlock";
import FantasyText from "./FantasyText";

const FantasyLeague = () => {
  return (
    <div className={style.fantasyLeague_block}>
      <FantasyText
        h2="Удосконалена фентезі-ліга"
        h5="Заняття для власників компендіуму"
        p="Зберіть команду своїх улюблених професійних гравців. Підберіть характеристики, які, на вашу
      думку, будуть найкориснішими. Змагайтеся з гравцями з усього світу, щоби заробити
      якнайбільше очок. Це та ж фентезі-ліга Dota, яку ви пам’ятаєте, але вдосконалена з усіх
      боків."
      />
      <RightImgBlock
        text="Обирайте"
        textP="Оберіть своїх улюблених гравців основи, центру й підтримки."
        img={FantasyDraft}
      />
      <RightImgBlock
        text="Персоналізуйте"
        textP="Використовуйте заміни, отримані серед нагород компендіуму, щоби спробувати підібрати якнайкращі характеристики для своїх гравців. Обирайте уважно — деякі характеристики підходять одним гравцям краще, ніж іншим."
        img={FantasyCraftUi}
      />
      <RightImgBlock
        text="Змагайтеся"
        textP="Кожні вихідні впродовж турніру — це окремий раунд фентезі-ліги, тож ви матимете кілька шансів позмагатися зі своїми друзями й зі світом. Заробляйте очки компендіуму і, якщо ваше місце в таблиці лідерів буде достатньо високим, унікальний трофей."
        img={FantasyReward}
      />
      <div className={style.fantasyLeague_line}>
        <LineHead
          urlImg={
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
          }
        />
      </div>
    </div>
  );
};

export default FantasyLeague;
