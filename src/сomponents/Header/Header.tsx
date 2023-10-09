import { useState } from "react";
import style from "./style/style.module.scss";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import ButtonLanguage from "./ButtonLanguage";
import BurgerImg from "../../image/burgerMenu.png";
import BurgerCloseImg from "../../image/close_burger.png";
import HeaderBurger from "./HeaderBurger";

type MenuType = {
  name: string;
  ref?: string;
};

const Header = () => {
  const [menu] = useState<MenuType[]>([
    {
      name: "Гра",
    },
    {
      name: "Герої",
      ref: "https://www.dota2.com/heroes",
    },
    {
      name: "Новини",
      ref: "https://www.dota2.com/news",
    },
    {
      name: "Кіберспорт",
      ref: "https://www.dota2.com/esports/ti12/schedule",
    },
  ]);
  const [languageLi] = useState([
    {
      language: "English",
      secondLang: "англійська",
    },
    {
      language: "Español - España",
      secondLang: "іспанська — Іспанія",
    },
    {
      language: "Français",
      secondLang: "французька",
    },
    {
      language: "Italiano",
      secondLang: "італійська",
    },
    {
      language: "Ελληνικά",
      secondLang: "грецька",
    },
    {
      language: "Ελληνικά",
      secondLang: "грецька",
    },
    {
      language: "한국어",
      secondLang: "корейська",
    },
    {
      language: "简体中文",
      secondLang: "спрощена китайська",
    },
    {
      language: "ไทย",
      secondLang: "тайська",
    },
    {
      language: "日本語",
      secondLang: "японська",
    },
    {
      language: "Português",
      secondLang: "португальська — Португалія",
    },
    {
      language: "Português - Brasil",
      secondLang: "португальська — Бразилія",
    },
    {
      language: "Polski",
      secondLang: "польська",
    },
    {
      language: "Dansk",
      secondLang: "данська",
    },
    {
      language: "Nederlands",
      secondLang: "нідерландська",
    },
    {
      language: "Suomi",
      secondLang: "фінська",
    },
    {
      language: "Norsk",
      secondLang: "норвезька",
    },
    {
      language: "Svenska",
      secondLang: "шведська",
    },
    {
      language: "Čeština",
      secondLang: "чеська",
    },
    {
      language: "Magyar",
      secondLang: "угорська",
    },
    {
      language: "Română",
      secondLang: "румунська",
    },
    {
      language: "Български",
      secondLang: "болгарська",
    },
    {
      language: "Türkçe",
      secondLang: "турецька",
    },
    {
      language: "Українська",
      secondLang: "yкраїнська",
    },
    {
      language: "Tiếng Việt",
      secondLang: "в’єтнамська",
    },
    {
      language: "Español - Latinoamérica",
      secondLang: "іспанська — Латинська Америка",
    },
  ]);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMicroMenu, setOpenMicroMenu] = useState<boolean>(false);
  const [openLanguage, setOpenLanguage] = useState<boolean>(false);

  function changeBurgerMenu() {
    setOpenMenu((prev) => !prev);
  }

  function changeMicroMenu() {
    setOpenMicroMenu((prev) => !prev);
  }

  function changeLanguageOpen() {
    setOpenLanguage((prev) => !prev);
  }

  return (
    <header className={style.header_block}>
      <HeaderLogo />
      <HeaderMenu menu={menu} openMicroMenu={openMicroMenu} setOpenMicroMenu={setOpenMicroMenu} />
      <ButtonLanguage 
      changeLanguageOpen={changeLanguageOpen}
      openLanguage={openLanguage}
      languageLi={languageLi}
       />
      <HeaderBurger
        openMenu={openMenu}
        changeBurgerMenu={changeBurgerMenu}
        BurgerCloseImg={BurgerCloseImg}
        BurgerImg={BurgerImg}
        menu={menu}
        openMicroMenu={openMicroMenu}
        changeMicroMenu={changeMicroMenu}
      />
    </header>
  );
};

export default Header;
