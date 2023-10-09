import style from "./style/style.module.scss";
import "../../App.css";
import { useState } from "react";

import ProfileHeroesImg from "../../image/profile_heroes.png";
import ProfileLoadingScreenImg from "../../image/profile_loading_screen.png";
import profileTickers from "../../image/profileTickers.png";
import ProfileTrophies from "../../image/ProfileTrophies.png";
import ProfileVoicelines from "../../image/ProfileVoicelines.png";
import ProfileSprays from "../../image/ProfileSprays.png";
import ProfileArmoryItems from "../../image/ProfileArmoryItems.png";
import ProfileEmoticons from "../../image/ProfileEmoticons.png";
import ProfileStats from "../../image/ProfileStats.png";
import ProfileCouriers from "../../image/ProfileCouriers.png";
import ProfileWards from "../../image/ProfileWards.png";
import ProfileUpdatedProfile from "../../image/ProfileUpdatedProfile.png";
import ProfileMiniProfile from "../../image/ProfileMiniProfile.png";

import LeftImgBlock from "../LeftImg/LeftImgBlock";
import LineHead from "../MainText/LineHead";
import ProfileText from "./ProfileText";
import Preview from "./Preview";
import SliderComp from "./SliderComp";
import DisplayObjects from "./DisplayObjects";

const ProfileShow = () => {
  const [displayOfObject] = useState([
    {
      name: "Герої",
      img: ProfileHeroesImg,
    },
    {
      name: "Заставки",
      img: ProfileLoadingScreenImg,
    },
    {
      name: "Наліпки",
      img: profileTickers,
    },
    {
      name: "Трофеї",
      img: ProfileTrophies,
    },
    {
      name: "Колеса чату",
      img: ProfileVoicelines,
    },
    {
      name: "Графіті",
      img: ProfileSprays,
    },
    {
      name: "Предмети зброярні",
      img: ProfileArmoryItems,
    },
    {
      name: "Смайлики",
      img: ProfileEmoticons,
    },
    {
      name: "Статистика",
      img: ProfileStats,
    },
    {
      name: "Кур’єри",
      img: ProfileCouriers,
    },
    {
      name: "Варди",
      img: ProfileWards,
    },
  ]);

  return (
    <div className={style.profile_main}>
      <ProfileText h2="Вітрина профілю" h3="Нова функція для всіх гравців у Dota" />

      <Preview
        fisrtP="Профіль і мініпрофіль були цілковито перероблені для всіх (точніше для 98% із вас, у кого
      оцінка спілкування вища за 6000). Тепер ви можете показати всі свої предмети та здобутки в
      Dota у вітрині профілю — буквально будь-що з вашого інвентарю."
        secondP="Хочете зробити святилище, присвячене вашій улюбленій професійній команді з 2016 року? Ви
      можете це зробити. А як щодо колекції ваших улюблених наборів для героїв? І це можливо. Всі
      до єдиного черевики для Кунки? На жаль, так. Технічно ви можете зробити й це."
      />

      <SliderComp />

      <LeftImgBlock
        textP=" Ви — Мікеланджело, а профіль — це ваше полотно. І обмежені ви лише вашою уявою (та
        базовою пристойністю)."
        text="Оновлений профіль"
        img={ProfileUpdatedProfile}
      />
      <LeftImgBlock
        textP="Мініпрофілі загалом схожі на профілі, але мають одну суттєву відмінність (увага!) — вони
      менші. Інші гравці бачать ваш мініпрофіль під час наведення вказівника миші на ваше
      ім’я."
        text="ОНОВЛЕНИЙ МІНІПРОФІЛЬ"
        img={ProfileMiniProfile}
      />

      <DisplayObjects
        displayOfObject={displayOfObject}
        textH2="Вітрина предметів"
        textP="Персоналізуйте свої вітрини за допомогою великого асортименту предметів і нагород, які ви
      збирали впродовж років."
      />
      <LineHead
        urlImg={
          "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/compendium_divider_180.png"
        }
      />
    </div>
  );
};

export default ProfileShow;
