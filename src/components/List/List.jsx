import Item from "../Item/Item"

function List ({data}) {
    return  <ul>{data.map((students) => {
        return <Item key={students.id} student={students}/>
          {/* return <li key={students.id}>
            <h3>{students.name}</h3>
            <p>{students.age}</p>
            <p>{students.city}</p>
            <p>{students.email}</p>
            <p>{students.isOnline ? "Онлайн" : "Офлайн"}</p>
            <p>{students.salary}</p>
          </li> */}
        })}</ul>
}

export default List