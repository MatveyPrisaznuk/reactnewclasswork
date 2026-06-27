// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";

// import football from "./football.json";
// console.log(football);

// const users = [
//   {
//     id: "a12d4f7c-3c61-4b4f-92a4-8d6c1d72f901",
//     name: "Daniel Carter",
//     email: "danielcarter@example.com",
//     eyeColor: "brown",
//     friends: ["Emma Brooks", "Liam Turner"],
//     isActive: true,
//     balance: 3150,
//     skills: ["javascript", "react", "node.js"],
//     gender: "male",
//     age: 29,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "b34f7e91-5c82-4d0b-ae91-2a8d5d3e7b45",
//     name: "Sophia Mitchell",
//     email: "sophiamitchell@example.com",
//     eyeColor: "blue",
//     friends: ["Daniel Carter", "Olivia Scott"],
//     isActive: false,
//     balance: 1850,
//     skills: ["html", "css", "figma"],
//     gender: "female",
//     age: 24,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "c92b8d14-91a3-47d5-80ef-4e61c5f8d372",
//     name: "Michael Adams",
//     email: "michaeladams@example.com",
//     eyeColor: "green",
//     friends: ["Ethan Hall", "Grace Young", "Sophia Mitchell"],
//     isActive: true,
//     balance: 4275,
//     skills: ["python", "django", "sql"],
//     gender: "male",
//     age: 35,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "d51c9e82-4f9d-41f6-a1cb-5b3f9d7e2c81",
//     name: "Emily Walker",
//     email: "emilywalker@example.com",
//     eyeColor: "hazel",
//     friends: ["Michael Adams", "Noah Evans"],
//     isActive: true,
//     balance: 2980,
//     skills: ["vue", "typescript", "sass"],
//     gender: "female",
//     age: 27,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "e73d1a45-6f4b-49e2-bd52-7d6e4f1b8a90",
//     name: "James Robinson",
//     email: "jamesrobinson@example.com",
//     eyeColor: "brown",
//     friends: ["Emily Walker", "Lucas Green"],
//     isActive: false,
//     balance: 1120,
//     skills: ["java", "spring", "docker"],
//     gender: "male",
//     age: 40,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "f28b6c90-8d14-4d71-93bf-9c1e7f5a4d63",
//     name: "Olivia Scott",
//     email: "oliviascott@example.com",
//     eyeColor: "blue",
//     friends: ["Sophia Mitchell", "Emma Brooks"],
//     isActive: true,
//     balance: 3890,
//     skills: ["ui", "ux", "figma", "photoshop"],
//     gender: "female",
//     age: 31,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "g84f3d21-7b56-4e83-9eaf-1f9d6b2c5e47",
//     name: "William Foster",
//     email: "williamfoster@example.com",
//     eyeColor: "gray",
//     friends: ["Daniel Carter", "James Robinson"],
//     isActive: false,
//     balance: 2435,
//     skills: ["go", "kubernetes", "aws"],
//     gender: "male",
//     age: 33,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "h61e5b92-2d37-4f18-a2d4-3b7c8e9f0a26",
//     name: "Emma Brooks",
//     email: "emmabrooks@example.com",
//     eyeColor: "green",
//     friends: ["Olivia Scott", "Daniel Carter", "Grace Young"],
//     isActive: true,
//     balance: 4720,
//     skills: ["react", "next.js", "graphql"],
//     gender: "female",
//     age: 26,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "i19c8a73-5e64-4b39-91cf-6d2e8f4b1c58",
//     name: "Lucas Green",
//     email: "lucasgreen@example.com",
//     eyeColor: "brown",
//     friends: ["James Robinson", "Noah Evans"],
//     isActive: true,
//     balance: 3365,
//     skills: ["c++", "qt", "opencv"],
//     gender: "male",
//     age: 30,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
//   {
//     id: "j47d2f81-9a25-4c56-b8de-5f1a7c3d9b14",
//     name: "Grace Young",
//     email: "graceyoung@example.com",
//     eyeColor: "blue",
//     friends: ["Emma Brooks", "Michael Adams"],
//     isActive: false,
//     balance: 1590,
//     skills: ["marketing", "seo", "analytics"],
//     gender: "female",
//     age: 28,
//     img: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80",
//   },
// ];

const usersInfo = [
  {
    id: 1,
    name: "Іван Петренко",
    age: 25,
    email: "ivan.petrenko@example.com",
    city: "Київ",
    isActive: true,
    balance: 1520.75,
    role: "admin",
    skills: ["JavaScript", "React", "Node.js"],
    friends: ["Олег", "Марія", "Анна"],
    address: {
      country: "Україна",
      street: "Хрещатик",
      zip: "01001",
    },
  },
  {
    id: 2,
    name: "Олена Коваль",
    age: 31,
    email: "olena.koval@example.com",
    city: "Львів",
    isActive: false,
    balance: 980.4,
    role: "user",
    skills: ["HTML", "CSS", "UI/UX"],
    friends: ["Ірина", "Світлана"],
    address: {
      country: "Україна",
      street: "Свободи",
      zip: "79000",
    },
  },
  {
    id: 3,
    name: "Андрій Шевченко",
    age: 28,
    email: "andrii.shevchenko@example.com",
    city: "Одеса",
    isActive: true,
    balance: 2200,
    role: "manager",
    skills: ["Java", "Spring", "SQL"],
    friends: ["Петро", "Дмитро"],
    address: {
      country: "Україна",
      street: "Дерибасівська",
      zip: "65000",
    },
  },
  {
    id: 4,
    name: "Марія Ткаченко",
    age: 22,
    email: "maria.tkachenko@example.com",
    city: "Харків",
    isActive: true,
    balance: 340.9,
    role: "user",
    skills: ["Python", "Django"],
    friends: ["Оксана"],
    address: {
      country: "Україна",
      street: "Сумська",
      zip: "61000",
    },
  },
  {
    id: 5,
    name: "Дмитро Бондар",
    age: 35,
    email: "dmytro.bondar@example.com",
    city: "Дніпро",
    isActive: false,
    balance: 4100,
    role: "admin",
    skills: ["DevOps", "Docker", "Kubernetes"],
    friends: ["Сергій", "Артем"],
    address: {
      country: "Україна",
      street: "Мечникова",
      zip: "49000",
    },
  },
  {
    id: 6,
    name: "Світлана Романова",
    age: 27,
    email: "svitlana.romanova@example.com",
    city: "Вінниця",
    isActive: true,
    balance: 1250,
    role: "user",
    skills: ["C#", ".NET", "SQL"],
    friends: ["Наталя"],
    address: {
      country: "Україна",
      street: "Грушевського",
      zip: "21000",
    },
  },
  {
    id: 7,
    name: "Олег Кравець",
    age: 30,
    email: "oleg.kravets@example.com",
    city: "Запоріжжя",
    isActive: true,
    balance: 890.3,
    role: "user",
    skills: ["JavaScript", "Vue", "TypeScript"],
    friends: ["Ігор", "Максим"],
    address: {
      country: "Україна",
      street: "Проспект Соборний",
      zip: "69000",
    },
  },
  {
    id: 8,
    name: "Наталя Гончар",
    age: 26,
    email: "natalia.honchar@example.com",
    city: "Чернігів",
    isActive: false,
    balance: 600,
    role: "user",
    skills: ["QA", "Testing", "Selenium"],
    friends: ["Юлія"],
    address: {
      country: "Україна",
      street: "Перемоги",
      zip: "14000",
    },
  },
  {
    id: 9,
    name: "Сергій Іваненко",
    age: 29,
    email: "serhii.ivanenko@example.com",
    city: "Полтава",
    isActive: true,
    balance: 3050,
    role: "manager",
    skills: ["Go", "Microservices"],
    friends: ["Віктор", "Роман"],
    address: {
      country: "Україна",
      street: "Європейська",
      zip: "36000",
    },
  },
  {
    id: 10,
    name: "Артем Лисенко",
    age: 24,
    email: "artem.lysenko@example.com",
    city: "Івано-Франківськ",
    isActive: true,
    balance: 770,
    role: "user",
    skills: ["React Native", "Mobile Dev"],
    friends: ["Максим"],
    address: {
      country: "Україна",
      street: "Незалежності",
      zip: "76000",
    },
  },
];

function App() {
  return (
    <>
      <ul>
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
      </ul>

      {/* <ul>
        {users.map(
          ({
            id,
            name,
            email,
            friends,
            isActive,
            balance,
            skills,
            gender,
            age,
            eyeColor,
          }) => (
            <li key={id}>
              <h2>{name}</h2>
              <p>Email: {email}</p>
              <p>Friends: {friends}</p>
              <p>
                Status:{" "}
                {isActive
                  ? "Користувач авторизований"
                  : "Користувач не авторизований"}
              </p>
              <p>Balance: {balance}</p>
              <p>Gender: {gender}</p>
              <p>Age: {age}</p>

              <span>Список друзів:</span>
              <ul>
                {friends.map((friend, id) => {
                  return (
                    <li key={id}>
                      <p>{friend}</p>
                    </li>
                  );
                })}
              </ul>

              <span>Навички:</span>
              <ul>
                {skills.map((skill, id) => {
                  return (
                    <li key={id}>
                      <p>{skill}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          ),
        )}

        <span>Футболісти:</span>
        <ul>
          {football.map(({ club, photo, name, id }) => {
            return <li key={id}>
            <h2>{name}</h2>
            <img src={photo} alt={name}/>
            <p>{club}</p>
            </li>
          })}
        </ul>
      </ul> */}
    </>
  );
}

export default App;
