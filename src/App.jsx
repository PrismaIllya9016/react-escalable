import "./App.css";
import Card from "./components/Card";
import ShowHide from "./components/ShowHide";
import vehicles from "./data/vehicles";

function App() {
  const vehicleList = vehicles.map((v) => {
    return <Card title={v.name} description={v.description} />;
  });

  return (
    <div className="App">
      <h1 className="text-center mb-16 mt-5">Hola react</h1>
      <div className="flex gap-10 flex-wrap justify-center">{vehicleList}</div>
      <ShowHide />
    </div>
  );
}

export default App;
