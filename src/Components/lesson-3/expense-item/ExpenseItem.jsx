import "./expneseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expeneseItemList">
      <div className="inputValue">
        <div className="dateAndTitle">
          <p className="date">{props.date.toString()}</p>
          <p className="title">{props.title}</p>
        </div>
        <p className="price">{props.price}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
