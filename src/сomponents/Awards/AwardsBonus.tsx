import { Zoom } from "react-awesome-reveal";
import style from "./style/style.module.scss";

type AwardsBonusProps = {
    awardsBonus: {
        text: string,
        secondText: string,
        img: string,
    }[]
}

const AwardsBonus: React.FC <AwardsBonusProps> = ({awardsBonus}) => {
  return (
    <Zoom duration={2000}>
    <div className={style.awards_bonus}>
      {awardsBonus.map((i) => (
        <div key={i.img} className={style.awards_bonus_div}>
          <img src={i.img} alt="" />
          <div className={style.awards_bonus_div_text}>
            <h5>{i.text}</h5>
            <p>{i.secondText}</p>
          </div>
        </div>
      ))}
    </div>
  </Zoom>
  );
};

export default AwardsBonus;
