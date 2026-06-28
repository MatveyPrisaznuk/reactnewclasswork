// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Title from "./components/Title/Title";
import Section from "./components/Section/Section";
import students from "./students.json";
import List from "./components/List/List";
import auto from "./auto.json"

// const usersInfo = [
//   {
//     id: 1,
//     name: "Іван Петренко",
//     age: 25,
//     email: "ivan.petrenko@example.com",
//     city: "Київ",
//     isActive: true,
//     balance: 1520.75,
//     role: "admin",
//     skills: ["JavaScript", "React", "Node.js"],
//     friends: ["Олег", "Марія", "Анна"],
//     address: {
//       country: "Україна",
//       street: "Хрещатик",
//       zip: "01001",
//     },
//   },
//   {
//     id: 2,
//     name: "Олена Коваль",
//     age: 31,
//     email: "olena.koval@example.com",
//     city: "Львів",
//     isActive: false,
//     balance: 980.4,
//     role: "user",
//     skills: ["HTML", "CSS", "UI/UX"],
//     friends: ["Ірина", "Світлана"],
//     address: {
//       country: "Україна",
//       street: "Свободи",
//       zip: "79000",
//     },
//   },
//   {
//     id: 3,
//     name: "Андрій Шевченко",
//     age: 28,
//     email: "andrii.shevchenko@example.com",
//     city: "Одеса",
//     isActive: true,
//     balance: 2200,
//     role: "manager",
//     skills: ["Java", "Spring", "SQL"],
//     friends: ["Петро", "Дмитро"],
//     address: {
//       country: "Україна",
//       street: "Дерибасівська",
//       zip: "65000",
//     },
//   },
//   {
//     id: 4,
//     name: "Марія Ткаченко",
//     age: 22,
//     email: "maria.tkachenko@example.com",
//     city: "Харків",
//     isActive: true,
//     balance: 340.9,
//     role: "user",
//     skills: ["Python", "Django"],
//     friends: ["Оксана"],
//     address: {
//       country: "Україна",
//       street: "Сумська",
//       zip: "61000",
//     },
//   },
//   {
//     id: 5,
//     name: "Дмитро Бондар",
//     age: 35,
//     email: "dmytro.bondar@example.com",
//     city: "Дніпро",
//     isActive: false,
//     balance: 4100,
//     role: "admin",
//     skills: ["DevOps", "Docker", "Kubernetes"],
//     friends: ["Сергій", "Артем"],
//     address: {
//       country: "Україна",
//       street: "Мечникова",
//       zip: "49000",
//     },
//   },
//   {
//     id: 6,
//     name: "Світлана Романова",
//     age: 27,
//     email: "svitlana.romanova@example.com",
//     city: "Вінниця",
//     isActive: true,
//     balance: 1250,
//     role: "user",
//     skills: ["C#", ".NET", "SQL"],
//     friends: ["Наталя"],
//     address: {
//       country: "Україна",
//       street: "Грушевського",
//       zip: "21000",
//     },
//   },
//   {
//     id: 7,
//     name: "Олег Кравець",
//     age: 30,
//     email: "oleg.kravets@example.com",
//     city: "Запоріжжя",
//     isActive: true,
//     balance: 890.3,
//     role: "user",
//     skills: ["JavaScript", "Vue", "TypeScript"],
//     friends: ["Ігор", "Максим"],
//     address: {
//       country: "Україна",
//       street: "Проспект Соборний",
//       zip: "69000",
//     },
//   },
//   {
//     id: 8,
//     name: "Наталя Гончар",
//     age: 26,
//     email: "natalia.honchar@example.com",
//     city: "Чернігів",
//     isActive: false,
//     balance: 600,
//     role: "user",
//     skills: ["QA", "Testing", "Selenium"],
//     friends: ["Юлія"],
//     address: {
//       country: "Україна",
//       street: "Перемоги",
//       zip: "14000",
//     },
//   },
//   {
//     id: 9,
//     name: "Сергій Іваненко",
//     age: 29,
//     email: "serhii.ivanenko@example.com",
//     city: "Полтава",
//     isActive: true,
//     balance: 3050,
//     role: "manager",
//     skills: ["Go", "Microservices"],
//     friends: ["Віктор", "Роман"],
//     address: {
//       country: "Україна",
//       street: "Європейська",
//       zip: "36000",
//     },
//   },
//   {
//     id: 10,
//     name: "Артем Лисенко",
//     age: 24,
//     email: "artem.lysenko@example.com",
//     city: "Івано-Франківськ",
//     isActive: true,
//     balance: 770,
//     role: "user",
//     skills: ["React Native", "Mobile Dev"],
//     friends: ["Максим"],
//     address: {
//       country: "Україна",
//       street: "Незалежності",
//       zip: "76000",
//     },
//   },
// ];

function App() {
  return (
    <>
      {/* <ul>
        {usersInfo.map(
          ({
            id,
            name,
            age,
            email,
            city,
            isActive,
            balance,
            role,
            skills,
            friends,
            address: { country, street, zip },
          }) => {
            return <li key={id}>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{email}</p>
            <p>{city}</p>
            <p>{isActive}</p>
            <p>{balance}</p>
            <p>{role}</p>
            <p>{skills.join(",")}</p>
             <p>{friends.join(",")}</p>
             <p>{country}</p>
             <p>{street}</p>
             <p>{zip}</p>
            </li>
          },
        )}
      </ul> */}
      <Section>
        <Title text="Про студентів" />
        <List data={students} />
      </Section>

      <Section>
        <Title text="Про авто" />
       <List data={auto}/>
      </Section>
    </>
  );
}

export default App;
