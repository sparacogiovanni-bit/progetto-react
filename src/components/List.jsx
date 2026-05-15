function List({ children }) {
  return (
    <ul className="name-list">
    {children}
    </ul>
  );
}

function ListItem({ children }) {
  return (
    <li>
    {children}
    </li>
  );
}

List.Item = ListItem;

export default List;