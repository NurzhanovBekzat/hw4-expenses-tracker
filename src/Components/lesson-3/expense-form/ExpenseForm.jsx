import FormInput from "../ui/forminput/FormInput";
import Button from "../ui/button/Button";
import "./expenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onShowForm, onNewExpenseAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const cancelHandler = (event) => {
    event.preventDefault();
    onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceInputChangeHandler = (event) => {
    console.log(event.key);
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      date,
      price,
    };

    onNewExpenseAdd(expenseData);
    // console.log(expenseData);
  };

  return (
    <form className="expenseForm">
      <div className="divFirst">
        <div className="formInputTextAndNumber">
          <FormInput
            id="name"
            labelName="Название"
            inputType="text"
            placeholder="..."
            value={title}
            onChange={titleInputChangeHandler}
          />
          <FormInput
            id="price"
            labelName="Количество денег (сом)"
            inputType="number"
            value={price}
            oneChange={priceInputChangeHandler}
            // onKeyPress=(event)=>{

            // }
          />
        </div>
        <div className="dataInput">
          <FormInput
            id="date"
            labelName="Дата"
            inputType="date"
            placeholder="дд.мм.гггг"
            value={date}
            onChange={dateInputChangeHandler}
          />
        </div>

        <div className="buttonExpenseForm">
          <div className="buttonOtmena">
            <Button size={'100px'} onClick={cancelHandler}>Отмена</Button>
          </div>
          <Button onClick={saveHandler}>Сохранить</Button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
