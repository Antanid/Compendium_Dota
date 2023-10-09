import style from "./style/style.module.scss";

type BingoTextProps = {
  textH2: string;
  textH5: string;
  firstP: string;
  secondP: string;
};

const BingoText: React.FC<BingoTextProps> = ({ textH2, textH5, firstP, secondP }) => {
  return (
    <div className={style.bingo_mainText}>
      <h2>{textH2}</h2>
      <h5>{textH5}</h5>
      <p>{firstP}</p>
      <p>{secondP}</p>
    </div>
  );
};

export default BingoText;
