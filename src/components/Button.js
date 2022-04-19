import "./Button.css";

const Button = ({ onClick, children }) => {
    return (
      <button className="buttn"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  
  export default Button