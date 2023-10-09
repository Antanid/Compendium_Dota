import { Slide } from "react-awesome-reveal";
import style from "./style/style.module.scss";

type AwardsLevelProps = {
  firstH5: string;
  firstP: string;
  secondH5: string;
  secondP: string;
  AwardsLevelsImg: string;
  AwardsBoostImg: string;
};

const AwardsLevel: React.FC<AwardsLevelProps> = ({
  firstH5,
  firstP,
  secondH5,
  secondP,
  AwardsLevelsImg,
  AwardsBoostImg,
}) => {
  return (
    <Slide direction="right" duration={1500}>
      <div className={style.awards_level}>
        <div className={style.awards_level_block}>
          <img src={AwardsLevelsImg} alt="img_levels_compendium" />
          <div className={style.awards_level_block_text}>
            <h5>{firstH5}</h5>
            <p>{firstP}</p>
          </div>
        </div>

        <div className={style.awards_level_block}>
          <img src={AwardsBoostImg} alt="img_levels_compendium" />
          <div className={style.awards_level_block_text}>
            <h5>{secondH5}</h5>
            <p>{secondP}</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default AwardsLevel;
