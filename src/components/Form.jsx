import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({
      name,
      email,
    });

    setName("");
    setEmail("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Invia</button>
      </form>

      {submittedData && (
        <div className="card">
          <h3>Dati inseriti</h3>
          <p>
            <strong>Nome:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default Form;