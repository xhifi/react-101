export default function TodoCard(props) {
  return (
    <div className="border border-3 shadow border-dark p-2 rounded rounded-3 mb-4">
      <h4>{props.title}</h4>
      {props.description && <p>{props.description}</p>}
      <button className="btn btn-sm btn-danger me-2">Delete Todo</button>
      <button className="btn btn-sm btn-primary">Update Todo</button>
    </div>
  );
}
