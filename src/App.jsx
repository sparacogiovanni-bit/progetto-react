import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {

  const names = [
    "Mario",
    "Luigi",
    "Anna",
    "Giulia"
  ];

  return (
    <>
      <Navbar />

      <Header />

      <div className="container">

        <h1 className="main-title">
          Benvenuto nel mio progetto React
        </h1>

        <label className="input-label" htmlFor="nome">
          Nome:
        </label>

        <input
          className="text-input"
          type="text"
          id="nome"
          placeholder="Inserisci il nome"
        />

        <h2 className="list-title">
          Lista nomi
        </h2>

        <List names={names} />

        <Counter />

        <Form />

      </div>
    </>
  );
}

export default App;