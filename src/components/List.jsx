function List(props) {
  return (
    <ul className="name-list">
      {props.names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  )
}

export default List