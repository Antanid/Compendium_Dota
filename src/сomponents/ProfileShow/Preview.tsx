import style from "./style/style.module.scss";

type PreviewProps = {
  fisrtP: string;
  secondP: string;
};

const Preview: React.FC<PreviewProps> = ({ fisrtP, secondP }) => {
  return (
    <div className={style.profile_textPreview}>
      <p>{fisrtP}</p>
      <p>{secondP}</p>
    </div>
  );
};

export default Preview;
