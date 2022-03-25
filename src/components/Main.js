import "../App.css";
import "./SubContents"
import "./Advertisment"

const Main = (props) => {
  return <div className="main">{props.children}</div>;
};

export default Main;