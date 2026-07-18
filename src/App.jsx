// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
// import Title from "./components/Title/Title";
// import Section from "./components/Section/Section";
// import List from "./components/List/List";
// import footbal from "./football.json"

import items from "./items.json";
import style from "./App.module.css"
import clsx from 'clsx';

function App() {
  // const sortedSalary = [...users].sort((a, b) => {
  //   return a.salary - b.salary;
  // });
  return (
    <>
      {/* <Section>
        <Title text="заголовок"/>
        <List data={sortedSalary}/>
      </Section> */}

      {/* <FootbalList footbal={footbal}/> */}

      <ul className={style.list}>
        {items.map(({ id, name, category, price, rating, inStock, status }) => {
          return (
            <li key={id} className={style.item}>
              <h2 className={clsx(style.title,rating >= 4 ? style.goodrate : style.badrate)}>{name}</h2>
              <p className={style.text}>{category}</p>
              <p className={style.text}>{price}</p>
              <p className={style.text}>{rating}</p>
              <span className={clsx(style.text,inStock ? style.isactive : style.text)}>{inStock ? "активний" : "Не активний"}</span>
              <p className={style.text}>{status}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
