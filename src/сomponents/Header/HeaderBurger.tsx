import style from "./style/style.module.scss";

type HeaderBurgerProps = {
  openMenu: boolean;
  changeBurgerMenu: () => void;
  BurgerCloseImg: string;
  BurgerImg: string;
  menu: {
    name: string;
    ref?: string;
  }[];
  openMicroMenu: boolean;
  changeMicroMenu: () => void;
};

const HeaderBurger: React.FC<HeaderBurgerProps> = ({
  openMenu,
  changeBurgerMenu,
  BurgerCloseImg,
  BurgerImg,
  menu,
  openMicroMenu,
  changeMicroMenu,
}) => {
  return (
    <div className={style.heder_block_burger_main}>
      <div className={style.header_block_burger_div}>
        {openMenu ? (
          <button className={style.header_block_burgerMenu} onClick={changeBurgerMenu}>
            <img src={BurgerCloseImg} alt="burger_img" />
          </button>
        ) : (
          <button className={style.header_block_burgerMenu} onClick={changeBurgerMenu}>
            <img src={BurgerImg} alt="burger_img" />
          </button>
        )}

        {openMenu && (
          <div className={style.header_menu_burger_block}>
            <ul className={style.header_menu_burger_block_ul}>
              {menu.map((i) => (
                <li key={i.name}>
                  {i.name !== "Гра" && i.name}
                  {i.name === "Гра" && (
                    <div
                      className={openMicroMenu ? style.selected_li : style.selected_change}
                      onClick={changeMicroMenu}
                    >
                      {" "}
                      {i.name}
                      <img
                        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_over.png"
                        alt="arrow"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {openMicroMenu && (
              <div className={style.header_block_burger_microheader}>
                <p>Патчі</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBurger;
