import style from "./style/style.module.scss";

type ButtonLanguageProps = {
  languageLi: {
    language: string;
    secondLang: string;
  }[];
  changeLanguageOpen: () => void;
  openLanguage: boolean;
};

const ButtonLanguage: React.FC<ButtonLanguageProps> = ({
  languageLi,
  changeLanguageOpen,
  openLanguage,
}) => {
  return (
    <div className={style.log_in_language_div}>
      <div className={style.log_language}>
        <a href="https://steamcommunity.com/oauth/loginform/?goto=%2Foauth%2Flogin%3Fclient_id%3D9B2C1229%26response_type%3Dtoken%26state%3Dinternational2023">
          <p className={style.log_language_logIn}>Увійти</p>
        </a>

        <div onClick={changeLanguageOpen} className={style.log_language_changeLanguage}>
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/language.svg"
            alt="language_change"
          />
          Виберіть мову
          <img
            className={style.log_language_changeLanguage_arrow}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_over.png"
            alt="arrow"
          />
          {openLanguage && (
            <div className={style.log_language_AllLang_div}>
              <ul>
                {languageLi.map((i) => (
                  <li>
                    {i.language} ({i.secondLang})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={style.goToPlay_div}>
        <a href="https://store.steampowered.com/app/570/Dota_2/">
          <button className={style.goToPlay_div_button}>
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/steam_icon.svg"
              alt="steam_button_logo"
            />
            <span>Грати безплатно</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ButtonLanguage;
