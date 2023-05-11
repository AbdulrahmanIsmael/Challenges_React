import React, { useState } from 'react';
import './App.css';

const App = () => {
  return <PersonsList />;
};

const PersonsList = () => {
  const [id, setId] = useState('');
  const persons = {
    id,
    name: 'Mazen Zein',
    job: 'Web Developer',
  };

  return (
    <section id="persons">
      <input
        type="text"
        name="user"
        id="user"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Person person={persons} pending={id} />
    </section>
  );
};

const Person = (props) => {
  const imageUrl = `https://randomuser.me/api/portraits/thumb/men/${props.person.id}.jpg`;

  return (
    <div className="person">
      {props.pending && <img src={imageUrl} alt="" />}
      <h1>{props.person.name}</h1>
      <div>{props.person.job}</div>
    </div>
  );
};

export default App;
