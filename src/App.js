import { useEffect, useState } from 'react';
import './App.css';
import lottery from "./lottery"

function App() {
  const [manager, setManager] = useState("");

  useEffect(() => {
    setupManager();
  }, []);

  const setupManager = async () => {
    const manager = await lottery.methods.manager().call(); // No need to specify the "from" property
    setManager(manager);
  }

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}</p>
    </div>
  );
}

export default App;
