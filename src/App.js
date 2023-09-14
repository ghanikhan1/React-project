import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App container font-quicksand mx-auto">
      <Navbar />
      <div className="content flex p-20 text-2xl max-w-600 my-10 mx-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
