import style from "./FootbalItem.module.css"

function FootbalItem({ id, name, club, photo, isActive }) {
  return (
    <li key={id} className={style.item}>
      <h2 className={isActive ? `${style.title} ${style.active}` : `${style.title} ${style.notactive}`}>{name}</h2>
      <p className={style.text}>{club}</p>
      <img className={style.image} src={photo} alt="photo" />
      <p className={isActive ? style.active : style.notactive}>{isActive ? "Грає" : "Не грає"}</p>
    </li>
  );
}

export default FootbalItem;
