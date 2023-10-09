import style from "./style/style.module.scss";

type PriceEndMoreInfoProps = {
  text: string;
};

const PriceEndMoreInfo: React.FC<PriceEndMoreInfoProps> = ({ text }) => {
  return (
    <div className={style.price_end_moreInformation}>
      <a href="https://www.dota2.com/esports/ti12/watch/0/0/series">
        <button>{text}</button>
      </a>
    </div>
  );
};

export default PriceEndMoreInfo;
