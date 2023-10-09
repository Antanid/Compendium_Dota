import style from "./style/style.module.scss";

type FirstTextProps = {
  h2: string;
  h5: string;
  p: string;
};

const FirstText: React.FC<FirstTextProps> = ({ h2, h5, p }) => {
  return (
    <div className={style.quest_mainText}>
      <h2>{h2}</h2>
      <h5>{h5}</h5>
      <p>{p}</p>
    </div>
  );
};

export default FirstText;
