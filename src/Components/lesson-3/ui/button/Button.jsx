import "./button.css";

const Button = (props, children) => {
  return (
    <button style={{width:props.size}} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
