import style from "./style/style.module.scss";

type MainTextProps = {
  textH2: string;
  textP: string;
};

const MainText: React.FC<MainTextProps> = ({textH2, textP}) => {
  return (
    <div className={style.awards_mainText}>
      <h2>{textH2}</h2>
      <p>{textP}</p>
    </div>
  );
};

export default MainText;
