import style from "./style/style.module.scss";

const PriceBlock = () => {
  return (
    <div className={style.compendiumPrice_img_priceBlock_main}>
      <div className={style.compendiumPrice_img_priceBlock}>
        <div className={style.compendiumPrice_img_priceBlock_standart}>
          <div className={style.compendiumPrice_img_priceBlock_textH4}>
            <h4>
              Стандартний <br /> компендіум
            </h4>
            <p>Рівні компендіуму (6)</p>
            <p>Посилювачі (6)</p>
            <div className={style.compendiumPrice_img_priceBlock_line}></div>
          </div>
          <div className={style.compendiumPrice_img_priceBlock_level}>
            <h5>Рівні компендіуму розблокують:</h5>
            <ul>
              <li>Доступ до всіх функцій компендіуму</li>
              <li>Смайлик Еґіди</li>
              <li>Добивальні сокири для Шляху до TI (4 шт.)</li>
              <li>Замінні жетони для Шляху до TI (6 шт.)</li>
              <li>Заміни для фентезі-ліги (36)</li>
              <li>1 випадкова фраза для чату</li>
              <li>1 капсула з наліпками гравців</li>
            </ul>
          </div>
          <div className={style.compendiumPrice_img_priceBlock_buy}>
            <button className={style.compendiumPrice_img_priceBlock_buy_button}>
              <a href="https://store.steampowered.com/login/?redir=buyitem%2F570%2F22507%2F1&redir_ssl=1">
                Купити за $7.49
              </a>
            </button>
            <p>Посилювачі розблоковують додатковий уміст на ваш вибір</p>
          </div>
        </div>

        <div className={style.compendiumPrice_img_priceBlock_deluxe}>
          <div className={style.compendiumPrice_img_priceBlock_textH4}>
            <h4>
              ПОКРАЩЕНИЙ <br /> КОМПЕНДІУМ
            </h4>
            <p>Рівні компендіуму (50)</p>
            <p>Посилювачі (28)</p>
            <div className={style.compendiumPrice_img_priceBlock_line}></div>
          </div>
          <div className={style.compendiumPrice_img_priceBlock_level}>
            <h5>Рівні компендіуму розблокують:</h5>
            <ul>
              <li>Доступ до всіх функцій компендіуму</li>
              <li>Смайлик Еґіди</li>
              <li>Добивальні сокири для Шляху до TI (13 шт.)</li>
              <li>Замінні жетони для Шляху до TI (15 шт.)</li>
              <li>Заміни для фентезі-ліги (78)</li>
              <li>Випадкові фрази для чату (8 шт.)</li>
              <li>Капсули з наліпками гравців (12 шт.)</li>
              <li>Капсули з наліпками команд (5 шт.)</li>
              <li>Скарбниці із заставками команд (4 шт.)</li>
              <li>Скарбниці із заставками TI (2 шт.)</li>
              <li>Ефект телепортації 1-го рівня</li>
            </ul>
          </div>
          <div className={style.compendiumPrice_img_priceBlock_buy}>
            <button className={style.compendiumPrice_img_priceBlock_buy_button}>
              <a href="https://store.steampowered.com/login/?redir=buyitem%2F570%2F22507%2F1&redir_ssl=1">
                Купити за $29.99
              </a>
              
            </button>
            <div className={style.compendiumPrice_img_priceBlock_buy_text}>
              <p>
                Посилювачі можуть розблокувати стиль інтерфейсу The International 2023 чи додатковий
                уміст на ваш вибір
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
