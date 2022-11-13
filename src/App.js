import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style/app.scss";

function App() {
  return (
    <div id="app">
      <Header />
      <section id="game-links">
        <Link to="/game?board=first">
          <div>
            <p>First Level</p>
            <div className="preview-img">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/place-tag-3eed3.appspot.com/o/first.png?alt=media&token=1dc4d66e-09cd-4596-a9b4-740c99f1cede"
                alt="first board"
              />
            </div>
          </div>
        </Link>
        <Link to="/game?board=second">
          <div>
            <p>Second Level</p>
            <div className="preview-img">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/place-tag-3eed3.appspot.com/o/second.png?alt=media&token=35363645-d5b7-4635-b49a-155a2ee5e5ed"
                alt="second board"
              />
            </div>
          </div>
        </Link>
        <Link to="/game?board=third">
          <div>
            <p>Third Level</p>
            <div className="preview-img">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/place-tag-3eed3.appspot.com/o/third.png?alt=media&token=98254793-e0b5-4b13-baf6-1464f3ae62db"
                alt="third board"
              />
            </div>
          </div>
        </Link>
        <Link to="/game?board=fourth">
          <div>
            <p>Fourth Level</p>
            <div className="preview-img">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/place-tag-3eed3.appspot.com/o/fourth.png?alt=media&token=22e70207-5cb7-499c-a945-bd0bb51e5cd3"
                alt="fourth board"
              />
            </div>
          </div>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default App;
