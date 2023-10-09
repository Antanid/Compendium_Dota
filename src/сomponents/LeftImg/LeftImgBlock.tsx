import style from './style/style.module.scss';
import { Slide } from "react-awesome-reveal";

type BlockImgProps = {
    text: string;
    textP: string;
    img: string;
  };

const LeftImgBlock: React.FC<BlockImgProps> = ({ text, textP, img }) => {
    return (
      <Slide direction='right' duration={1500}>
      <div className={style.left_blockImg}>
        <div className={style.left_blockImg_text}>
          <h5>{text}</h5>
          <p>{textP}</p>
        </div>
  
        <img className={style.left_img} src={img} alt="img_quest" />
      </div>
      </Slide>
    );
  };
  
export default LeftImgBlock