// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Title from "./components/Title/Title";
import Section from "./components/Section/Section";
import List from "./components/List/List";

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

const users = [
  {
    id: 1,
    name: "Іван",
    age: 16,
    city: "Київ",
    email: "ivan@example.com",
    isActive: true,
    salary: 12000,
  },
  {
    id: 2,
    name: "Олена",
    age: 22,
    city: "Львів",
    email: "olena@example.com",
    isActive: false,
    salary: 28000,
  },
  {
    id: 3,
    name: "Андрій",
    age: 35,
    city: "Одеса",
    email: "andrii@example.com",
    isActive: true,
    salary: 55000,
  },
  {
    id: 4,
    name: "Марія",
    age: 48,
    city: "Харків",
    email: "maria@example.com",
    isActive: true,
    salary: 73000,
  },
  {
    id: 5,
    name: "Олександр",
    age: 61,
    city: "Дніпро",
    email: "olex@example.com",
    isActive: false,
    salary: 41000,
  },
  {
    id: 6,
    name: "Катерина",
    age: 27,
    city: "Вінниця",
    email: "katya@example.com",
    isActive: true,
    salary: 36000,
  },
  {
    id: 7,
    name: "Максим",
    age: 19,
    city: "Чернігів",
    email: "maks@example.com",
    isActive: false,
    salary: 18000,
  },
  {
    id: 8,
    name: "Наталія",
    age: 72,
    city: "Полтава",
    email: "nataliya@example.com",
    isActive: true,
    salary: 25000,
  },
];

function App() {
  const sortedSalary = [...users].sort((a, b) => {
    return a.salary - b.salary;
  });
  return (
    <>
      <Section>
        <Title text="заголовок"/>
        <List data={sortedSalary}/>
      </Section>
    </>
  );
}

export default App;
