import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);

  const expenseTotal = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = expenseTotal > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - expenseTotal}</span>
    </div>
  );
};

export default Remaining;
