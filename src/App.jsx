function App() {
  return (
    <div>
      <h1 className="main-title">Benvenuto nel mio progetto React</h1>

      <label className="input-label" htmlFor="nome">
        Nome:
      </label>

      <input
        className="text-input"
        type="text"
        id="nome"
        placeholder="Inserisci il nome"
      />
    </div>
  );
}

export default App;