import style from "./style/style.module.scss";

type FooterTextProps = {
  text: string;
};

const FooterText: React.FC<FooterTextProps> = ({ text }) => {
  return (
    <div className={style.footer_main_text}>
      <p>{text}</p>
    </div>
  );
};

export default FooterText;
