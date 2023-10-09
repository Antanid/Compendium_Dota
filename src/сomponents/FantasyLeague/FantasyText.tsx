import React from "react";
import style from "./style/style.module.scss";

type FantasyTextProps = {
  h2: string;
  h5: string;
  p: string;
};

const FantasyText: React.FC<FantasyTextProps> = ({ h2, h5, p }) => {
  return (
    <div className={style.fantasyLeague_mainText}>
      <h2>{h2}</h2>
      <h5>{h5}</h5>
      <p>{p}</p>
    </div>
  );
};

export default FantasyText;
