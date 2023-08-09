import "./App.css";
import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";

function App() {
  return (
    <div className="App">
      <ControlledForm value={2} />
      {/* <UncontrolledForm /> */}
    </div>
  );
}

export default App;
