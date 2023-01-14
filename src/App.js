import { useState } from "react";
import "./App.css";
import Expenses from "./Components/lesson-3/expenses/Expenses";
import NewExpense from "./Components/lesson-3/new-expense/New-expense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title:"bekzat",
      perice:111,
      date:new Date().getFullYear()
    }
  ]);
  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };
  
  return (
    <div className="App">

     <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div> 
  );
}

export default App;

//! REACT
//? components:
// 1.func,
// 2.return JSX,
// 3.start with capital letter,
// 4.Noun/сущес,
// 5.JSX should have parent element,

//? reactive (state, VDom)
