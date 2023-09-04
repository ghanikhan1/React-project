import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App container mx-auto bg-gray-200">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
