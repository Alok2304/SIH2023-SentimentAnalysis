import React from "react";
import Card from "./Card"; 
import emojipedia from "./emojipedia"; 

function cardCreate(contact) {
  return (
    <Card
      key={contact.id}
      emoji={contact.emoji}
      name={contact.name}
      meaning={contact.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(cardCreate)}</dl>
    </div>
  );
}

export default App;

