import "./styles.css";

var headingText = "inside outt";
var color = "red";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
    </div>
  );
}
