import "./App.css";
import { CanvasWrapper } from "./CanvasWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button id="download">Download</button>
        <button id="drawCircleButton">Draw Circle</button>
        <p>Example Drawing Web for React (READMODE ONLY)</p>
        <CanvasWrapper />

        <small style={{ color: "red" }}>
          Change link to DrawingWeb to protected server
        </small>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
