import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ name, cost, id }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-item-center">
      {name}
      <div>
        <span className="">{cost}</span>
        <p className="badge">Hello</p>
        <Button type="delete" onClick={handleDeleteExpense}>
          delete
        </Button>
      </div>
    </li>
  );
};

export default ExpenseItem;
