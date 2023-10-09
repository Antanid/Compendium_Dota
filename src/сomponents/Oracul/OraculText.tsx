import style from "./style/style.module.scss";

type OraculTextProps = {
  h2: string;
  h5: string;
  fistP: string;
  secondP: string;
};

const OraculText: React.FC<OraculTextProps> = ({ h2, h5, fistP, secondP }) => {
  return (
    <div className={style.oracul_mainText}>
      <h2>{h2}</h2>
      <h5>{h5}</h5>
      <p>
       {fistP}
      </p>
      <p>
       {secondP}
      </p>
    </div>
  );
};

export default OraculText;
