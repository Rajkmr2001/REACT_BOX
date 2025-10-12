import "./App.css";
import ClockHeading from "./components/clockHeading";
import ClockMoto from "./components/clockMoto";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockMoto></ClockMoto>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
