import style from "./style/style.module.scss";

type HeaderMenuType = {
  menu: {
    name: string;
    ref?: string;
  }[];
  openMicroMenu: boolean;
  setOpenMicroMenu: any;
};

const HeaderMenu: React.FC<HeaderMenuType> = ({ menu, openMicroMenu, setOpenMicroMenu }) => {
  return (
    <div className={style.header_menu_block}>
      <ul className={style.header_menu_block_ul}>
        {menu.map((i) => (
          <li key={i.name}>
            {i.name !== "Гра" && <a href={i.ref}>{i.name}</a>}
            {i.name === "Гра" && (
              <div
                className={openMicroMenu ? style.selected_li : style.selected_change}
                onClick={() => setOpenMicroMenu((prev: boolean) => !prev)}
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
        <div className={style.header_block_microheader}>
          <a href="https://www.dota2.com/patches/7.34d">
            <p>Патчі</p>
          </a>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
