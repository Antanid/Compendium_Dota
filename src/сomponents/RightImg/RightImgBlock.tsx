import style from './style/style.module.scss';
import { Slide } from "react-awesome-reveal";



type FantasyBlockImgType = {
  img: string;
  text: string;
  textP: string;
};

const RightImgBlock: React.FC<FantasyBlockImgType> = ({ img, text, textP }) => {
  return (
    <Slide direction='left' duration={1500}>
    <div className={style.right_blockImg}>
      <img
        className={style.right_blockImg_img}
        src={img}
        alt="img_fantasyLeague"
      />
      <div className={style.right_blockImg_text}>
        <h5>{text}</h5>
        <p>{textP}</p>
      </div>
    </div>
    </Slide>
  );
};

export default RightImgBlock