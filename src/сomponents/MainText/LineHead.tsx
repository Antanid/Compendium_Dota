import style from "./style/style.module.scss";

type LineType = {
  urlImg: string;
};

const LineHead: React.FC<LineType> = ({ urlImg }) => {
  return (
    <div className={style.line_header}>
      <img
        src={urlImg}
        alt="line_img"
      />
    </div>
  );
};

export default LineHead;
