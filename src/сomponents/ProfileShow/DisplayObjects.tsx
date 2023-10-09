import style from "./style/style.module.scss";
import { Fade } from "react-awesome-reveal";

type displayOfObjectMap = {
  name: string;
  img: string;
};

type DisplayOfObjectsProps = {
  displayOfObject: {
    name: string;
    img: string;
  }[];
  textH2: string;
  textP: string;
};

const DisplayObjects: React.FC<DisplayOfObjectsProps> = ({ displayOfObject, textH2, textP }) => {
  return (
    <div className={style.profile_displayOfObjects}>
      <div className={style.profile_displayOfObjects_text}>
        <h2>{textH2}</h2>
        <p>{textP}</p>
      </div>

      <div className={style.profile_displayOfObjects_imgText}>
        {displayOfObject.map((i: displayOfObjectMap) => (
          <Fade duration={1000}>
            <div className={style.profile_displayOfObjects_imgText_mapBlock}>
              <img src={i.img} alt="img_block" />
              <div className={style.profile_displayOfObjects_imgText_p}>
                <p>{i.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default DisplayObjects;
