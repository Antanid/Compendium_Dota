import style from "./style/style.module.scss";

type ProfileTextProps = {
  h2: string;
  h3: string;
};

const ProfileText: React.FC<ProfileTextProps> = ({ h2, h3 }) => {
  return (
    <div className={style.profile_H2Text}>
      <h2>{h2}</h2>
      <h3>{h3}</h3>
    </div>
  );
};

export default ProfileText;
