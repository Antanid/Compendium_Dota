
const Arrow= (props: any) => {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <img
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/icons/arrow_right.png"
        alt="rightArrow"
      />
    ) : (
      <img
        src=" https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/international2023/icons/arrow_left.png"
        alt="rightArrow"
      />
    );
  console.log(props);
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
};

export default Arrow;
