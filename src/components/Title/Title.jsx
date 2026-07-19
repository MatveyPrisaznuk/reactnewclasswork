// import "./Title.css"
// import style from "./Title.module.css"
// console.log(style);

// function Title ({text}) {
//     return <h1 className={style.heading}>{text}</h1>
// }

// export default Title
import { Heading } from "./Title.styled"

function Title() {
    return  <Heading>Hello World!</Heading>
}

export default Title