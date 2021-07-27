import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./components/ExpenseTotal";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Expenses />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Budget</h3>
        <div className="row mt-3">
          <AddExpenseForm />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
