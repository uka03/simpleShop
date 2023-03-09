import "./App.css";
import Navbar from "./components/navbar";
import Table from "./components/table";

function App() {
  return (
    <div className="flex justify-center flex-col gap-5">
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
