
import { useState } from 'react';

export const DigitalPanel = () => {
  const [people, setPeople] = useState([
    { id: 101, name: "John" },
    { id: 102, name: "Kate" },
    { id: 103, name: "Emma" }
  ]);

  const removePerson = (idToRemove: number) => {
    const updated = people.filter(p => p.id !== idToRemove);
    setPeople(updated);
  };

  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <input defaultValue={person.name} />
          <button onClick={() => removePerson(person.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
    