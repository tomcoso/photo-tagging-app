import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import "./style/app.scss";

function App() {
  return (
    <div id="app">
      <Link to="/game?board=first">Board 1</Link>
      <Link to="/game?board=second">Board 2</Link>
      <Link to="/game?board=third">Board 3</Link>
      <Link to="/game?board=fourth">Board 4</Link>
      <Footer />
    </div>
  );
}

export default App;
