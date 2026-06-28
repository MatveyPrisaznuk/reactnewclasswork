function Item ({student}) {
    return <li>
            <h3>{student.name}</h3>
            <p>{student.age}</p>
            <p>{student.city}</p>
            <p>{student.email}</p>
            <p>{student.isOnline ? "Онлайн" : "Офлайн"}</p>
            <p>{student.salary}</p>
          </li>
}

export default Item