import style from "./style/style.module.scss";

type SecondTextProps = {
  TextH5: string;
  TextP: string;
};

const SecondText: React.FC<SecondTextProps> = ({ TextH5, TextP }) => {
  return (
    <div className={style.awards_secendText}>
      <h5>{TextH5}</h5>
      <p>{TextP}</p>
    </div>
  );
};

export default SecondText;
