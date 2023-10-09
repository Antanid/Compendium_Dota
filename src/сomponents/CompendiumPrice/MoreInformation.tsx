import style from "./style/style.module.scss";

type MoreInformationProps = {
  text: string;
};

const MoreInformation: React.FC<MoreInformationProps> = ({ text }) => {
  return (
    <div className={style.compendiumPrice_moreInformation}>
      <a href="https://www.dota2.com/esports/ti12/watch/0/0/series">
        <button>{text}</button>
      </a>
    </div>
  );
};

export default MoreInformation;
