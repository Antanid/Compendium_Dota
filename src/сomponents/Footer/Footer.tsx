import FooterImg from "./FooterImg";
import FooterText from "./FooterText";
import style from "./style/style.module.scss";

const Footer = () => {
  return (
    <div className={style.footer_main}>
      <FooterImg />
      <FooterText
        text="Dota і логотип Dota є торговельними марками та/або зареєстрованими торговельними марками
      Valve Corporation. 2023 Valve Corporation. Усі права захищено."
      />
    </div>
  );
};

export default Footer;
