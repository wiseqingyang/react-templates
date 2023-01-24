import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';

const HomePage = () => {
  const [number, setNumber] = useState<number>(0);
  return (
    <div>
      <h1>AWESOME VITE</h1>
      <main>
        <div>
          <Button onClick={() => setNumber(number - 1)}>-</Button>
          <span>{number}</span>
          <Button onClick={() => setNumber(number + 1)}>+</Button>
        </div>
      </main>
      <nav>
        <Link to="/mine">mine</Link>
      </nav>
    </div>
  );
};

export default HomePage;
