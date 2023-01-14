import ExpenseItem from "../expense-item/ExpenseItem"
import "./expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"

const Expenses=({expenses})=>{
    const [selectedYear, setSelectedYear] = useState()

    const yearChangeHandler = (event) =>{
       setSelectedYear(event.target.value) 
    }
    return(
        <ul className="expenses"> 
        <ExpensesFilter value={selectedYear} onChange={yearChangeHandler}/>
            {expenses.map((elem)=>{
                return <ExpenseItem  key={elem.title}  price={elem.price} title={elem.title} date={elem.date} />
            })}
        </ul>
    )
}

export default Expenses