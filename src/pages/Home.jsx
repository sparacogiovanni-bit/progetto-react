import { useState } from "react";

import Header from "../components/Header";
import List from "../components/List";
import Counter from "../components/Counter";
import Form from "../components/Form";
import LoadingData from "../components/LoadingData";

function Home() {
  
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
    <>
    <Header />
    
    <div className="container">
    
    <h1 className="main-title">
    Benvenuto nel mio progetto React
    </h1>
    
    <label
    className="input-label"
    htmlFor="nome"
    >
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
    
    <List>
    
    <List.Item>
    Mario
    </List.Item>
    
    <List.Item>
    Luigi
    </List.Item>
    
    <List.Item>
    Anna
    </List.Item>
    
    <List.Item>
    Giulia
    </List.Item>
    
    </List>
    
    <Counter />
    
    <div className="form-container">
    
    <Form onSubmit={handleSubmit}>
    
    <Form.Input
    label="Nome"
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Inserisci il nome"
    />
    
    <Form.Input
    label="Email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Inserisci la mail"
    />
    
    <Form.Button>
    Invia
    </Form.Button>
    
    </Form>
    
    {submittedData && (
      <div className="card">
      
      <h3>
      Dati inseriti
      </h3>
      
      <p>
      <strong>Nome:</strong>
      {submittedData.name}
      </p>
      
      <p>
      <strong>Email:</strong>
      {submittedData.email}
      </p>
      </div>
    )}
    </div>
    
    <LoadingData />
    
    </div>
    </>
  );
}

export default Home;