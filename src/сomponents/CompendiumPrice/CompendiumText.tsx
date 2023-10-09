import React from "react";
import style from "./style/style.module.scss";

type CompendiumTextProps = {
  firstText: string;
  secondText: string;
  thirdText: string;
};

const CompendiumText: React.FC<CompendiumTextProps> = ({ firstText, secondText, thirdText }) => {
  return (
    <div className={style.compendiumPrice_img_text}>
      <p>{firstText}</p>
      <p>{secondText}</p>
      <p>{thirdText}</p>
    </div>
  );
};

export default CompendiumText;
