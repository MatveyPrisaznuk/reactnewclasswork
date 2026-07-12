import FootbalItem from "../FootbalItem/FootbalItem";
import style from "./FootbalList.module.css"
function FootbalList({ footbal }) {
  return (
    <ul className={style.list}>
      {footbal.map(({ id, name, club, photo, isActive }) => {
        return <FootbalItem key={id} name={name} club={club} photo={photo} isActive={isActive}/>;
      })}
    </ul>
  );
}

export default FootbalList;
