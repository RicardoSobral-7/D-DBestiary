import React, { useEffect, useState } from 'react';

import './styles/App.css';
import Bestiary from './components/Bestiary';
import { MonsterContext } from './components/MonsterContext';

interface Results {
    index?: string,
    name?: string
}

function App() {
 
  const [results, setResults] = useState<Results[]>([]);
  const [singleMonster, setSingleMonster] = useState<null | string>(null);


  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results);
      })

  }, []);

  function bestiary(event: React.ChangeEvent<HTMLSelectElement>){
    const monster = event.target.value;
    setSingleMonster(monster);
  }

  return (
    <div className="App">
      <div className="bestiary">
        <div className="select-wrapper">
          <label htmlFor="beasts">Select one beast: </label>
          <select id="beasts" name="monsters" onChange={bestiary}>
            {results.map((monsters) => {
              return (
                <option key={monsters.index} value={monsters.index?.toString()}>{monsters.name}</option>
              )
            })}
          </select>
        </div>
        <MonsterContext.Provider value={singleMonster}>
          <Bestiary/>
        </MonsterContext.Provider>
      </div>
    </div>
  );
}


export default App;
