function Table(props) {
  let rows = props.links.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.URL}</td>
      </tr>
    );
  });

  return (
    //return some JSX
    <table>
      <thead>
        <tr>
          <th>Link Name</th>
          <th>Link URL</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Table;
