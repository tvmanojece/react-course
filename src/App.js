import ToDo from "./components/ToDo";

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <ToDo myTitle="Learn React" />
      <br />
      <ToDo myTitle="Learn React again" />
      <br />
      <ToDo myTitle="Learn React again and again" />
    </div>
  );
}

export default App;
