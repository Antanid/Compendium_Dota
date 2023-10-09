import style from "./style/style.module.scss";

type FirstTextProps = {
  h2: string;
  h5: string;
  firstP: string;
  secondP: string;
};

const FirstText: React.FC<FirstTextProps> = ({ h2, h5, firstP, secondP }) => {
  return (
    <div className={style.talents_mainText}>
      <h2>{h2}</h2>
      <h5>{h5}</h5>
      <p>
        {firstP}
      </p>
      <p>
        {secondP}
      </p>
    </div>
  );
};

export default FirstText;
