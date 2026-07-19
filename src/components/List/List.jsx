// import Item from "../Item/Item"

// function List({data}) {
//   return  <ul>
//           {data.map(
//             ({ id, name, age, city, email, isActive, salary }) => {
//               return (
//                <Item key={id} name={name} age={age} city={city} email={email} isActive={isActive} salary={salary}/>
//               );
//             },
//           )}
//         </ul>
// }

// export default List
import { Data } from "./List.styled"

function List({data}) {
    return <Data>{data.map(({id, name, age, isOnline, role, points}) => {
        return <Item key={id}>
        <Title>{name}</Title>
        <p>{age}</p>
        <p>{isOnline ? "Active" : "Not Active"}</p>
        <p>{role}</p>
        <p>{points}</p>
        </Item>
    })}</Data>
}

export default List