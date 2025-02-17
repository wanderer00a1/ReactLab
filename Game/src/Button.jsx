import "./Button.css";
function Button({text,clickFunc}){
    return <button className="Button" onClick={clickFunc}>{text}</button>
}
export default Button;